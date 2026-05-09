# API Quick Reference

This page lists the main methods shown in the package README.

## Payable Model Methods

### `createReceipt`

```php
$user->createReceipt(1000, 'Initial credit', now());
$user->createReceipt(1000, 'Initial credit', now(), autoInvoice: false);
```

Creates a receipt for the payable model. The `autoInvoice` argument can override receipt-driven invoice generation for that call.

### `registerPayment`

```php
$payment = $user->registerPayment(100, now()->addDays(10));
```

Registers an upcoming payment for the payable model.

### `overduePayments`

```php
$overduePayments = $user->overduePayments();
```

Returns overdue payments for the payable model.

### `generateDueInvoices`

```php
$invoices = $user->generateDueInvoices();
```

Generates invoices for payments that are due.

### `accountStatements`

```php
$statements = $user->accountStatements()->orderByDesc('date')->get();
```

Returns the payable model account statements relationship/query.

### `balance`

```php
$balance = $user->balance();
```

Returns the current wallet balance.

## Upcoming Payment Methods

### `createInvoice`

```php
$invoice = $payment->createInvoice('Original invoice', now());
```

Creates an invoice for an upcoming payment.

### `createReceipt`

```php
$payment->createReceipt('Test Receipt', now());
```

Creates a receipt linked to an upcoming payment.

### `split`

```php
$children = $payment->split([
    ['amount' => 500, 'due_date' => now()->addMonth()],
    ['amount' => 500, 'due_date' => now()->addMonths(2)],
]);
```

Splits an upcoming payment into child payments.

### `isOverdue`

```php
if ($payment->isOverdue()) {
    // notify the customer
}
```

Checks whether a payment is overdue.

## Statement Methods

### `createCreditNote`

```php
$creditNote = $invoice->createCreditNote('Invoice cancelled', now());
```

Creates a manual credit note from an invoice.

### `void`

```php
$invoice->void('Created by mistake');
```

Voids an invoice and excludes it from balance recalculation.

### `toPdf`

```php
$pdf = $statement->toPdf();
```

Generates a PDF instance for a statement.

