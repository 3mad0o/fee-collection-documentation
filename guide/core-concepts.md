# Core Concepts

FeeCollection is built around payable models, upcoming payments, account statements, and wallet balances.

## Payable Models

Any Eloquent model using `UseFeeable` can own fee workflows.

Typical examples include:

- `User`
- `Student`
- `Customer`
- `Tenant`

The trait adds methods for payment registration, statement access, wallet balance checks, overdue detection, and due invoice generation.

## Upcoming Payments

An upcoming payment represents a scheduled amount due on a future date.

Upcoming payments can be:

- registered from a payable model
- invoiced manually
- receipted manually
- split into child payments
- detected as overdue
- invoiced automatically when due

## Account Statements

Account statements represent financial documents and history entries such as:

- invoices
- receipts
- credit notes

Statements include a `status` field for reporting and filtering.

## Wallet Balance

The package tracks one wallet balance row per payable model in `wallet_transactions`.

Use the payable model to read the current balance:

```php
$balance = $user->balance();
```

## Credit Notes

Credit notes are created from invoices. A credit note:

- references the original invoice through `reference_id`
- uses a negative `amount`
- changes the original invoice status to `credited`

Credit notes are not created automatically during payment splitting.

## Voided Invoices

A voided invoice is excluded from balance recalculation.

Use voiding only for invoices that should be killed internally before customer settlement.

