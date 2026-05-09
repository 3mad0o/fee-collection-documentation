# Usage Recipes

These examples assume your payable model uses the `UseFeeable` trait.

## Create a Receipt and Register Payments

This flow starts with wallet credit, then registers upcoming payments that can consume that wallet balance.

```php
$user = User::factory()->create();

$user->createReceipt(1000, 'Initial credit', now());

$user->registerPayment(100, now()->addDays(1));
$user->registerPayment(100, now()->addDays(2));
$user->registerPayment(100, now()->addDays(3));
```

If wallet balance is enough, registered payments can be invoiced automatically.

Disable receipt-driven invoice generation for a single call:

```php
$user->createReceipt(1000, 'Initial credit', now(), autoInvoice: false);
```

## Create an Invoice and Receipt for One Payment

```php
$payment = $user->registerPayment(100, now()->addDays(10));

$payment->createInvoice('Test Invoice', now());
$payment->createReceipt('Test Receipt', now());
```

## Split an Upcoming Payment

```php
$payment = $user->registerPayment(1000, now()->addDays(1));

$children = $payment->split([
    ['amount' => 100, 'due_date' => now()->addDays(2)],
    ['amount' => 100, 'due_date' => now()->addDays(3)],
    ['amount' => 800, 'due_date' => now()->addDays(4)],
]);
```

If the original payment already had an invoice, create a credit note manually:

```php
$invoice = $payment->invoice;

$children = $payment->split([
    ['amount' => 500, 'due_date' => now()->addMonth()],
    ['amount' => 500, 'due_date' => now()->addMonths(2)],
]);

$invoice->createCreditNote('Customer requested installment split', now());
```

## Create a Credit Note

```php
$payment = $user->registerPayment(1000, now()->addDay());
$invoice = $payment->createInvoice('Original invoice', now());

$creditNote = $invoice->createCreditNote('Invoice cancelled', now());
```

Credit notes can only be created from invoices.

## Void an Invoice

```php
$payment = $user->registerPayment(1000, now()->addDay());
$invoice = $payment->createInvoice('Draft invoice', now());

$invoice->void('Created by mistake');
```

Voided invoices are excluded from balance recalculation.

## Detect Overdue Payments

```php
if ($payment->isOverdue()) {
    // notify the customer
}

$overduePayments = $user->overduePayments();
```

An overdue payment has a due date before today, still has a remaining amount, and has no linked receipt.

## Generate Due Invoices

```php
$invoices = $user->generateDueInvoices();
```

Scheduler example:

```php
use App\Models\User;

$schedule->call(function () {
    User::each(fn (User $user) => $user->generateDueInvoices());
})->daily();
```

## Query Statements and Balance

```php
$statements = $user->accountStatements()->orderByDesc('date')->get();
$balance = $user->balance();
```

## Filter Statements by Status

```php
$paidStatements = $user->accountStatements()->where('status', 'paid')->get();
$creditedStatements = $user->accountStatements()->where('status', 'credited')->get();
```

Status is a reporting helper. Balances are still calculated from statement debit and credit values, excluding voided invoices.

