# Database Fields

This reference summarizes the stored fields called out by the package README.

## Tables Created by Migrations

- `upcoming_payments`
- `account_statements`
- `account_statement_upcoming_payments`
- `wallet_transactions`

## Account Statements

| Field | Purpose |
| --- | --- |
| `number` | Numeric sequence only. Prefix and suffix are added through `formatted_number`. |
| `document` | Stored PDF relative path when PDF generation is enabled. |
| `reference_id` | Original invoice reference for credit notes. |
| `status` | Reporting status for filtering statements. |
| `voided_at` | Timestamp for voided invoices. |
| `void_reason` | Reason recorded when an invoice is voided. |

## Wallet Transactions

| Field | Purpose |
| --- | --- |
| `balance` | Current wallet balance for the payable model. |

## Statement Status Values

- `issued`
- `paid`
- `overdue`
- `credited`
- `voided`

