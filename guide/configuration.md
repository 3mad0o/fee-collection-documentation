# Configuration

The package configuration file is published to:

```text
config/fee_collection.php
```

## Default Options

```php
return [
    'invoice_prefix' => 'I-',
    'invoice_suffix' => '',
    'receipt_prefix' => 'R-',
    'receipt_suffix' => '',
    'credit_note_prefix' => 'CN-',
    'credit_note_suffix' => '',
    'auto_invoice_on_receipt' => true,
    'invoice_view' => 'fee-collection::pdf.invoice',
    'receipt_view' => 'fee-collection::pdf.receipt',
    'credit_note_view' => 'fee-collection::pdf.invoice',
    'pdf' => [
        'enabled' => env('FEE_COLLECTION_PDF_ENABLED', true),
        'paper' => 'a4',
        'orientation' => 'portrait',
        'disk' => env('FEE_COLLECTION_PDF_DISK', 'public'),
        'path' => env('FEE_COLLECTION_PDF_PATH', 'fee-collection/documents'),
    ],
];
```

## Number Formatting

`account_statements.number` stores only the numeric sequence value.

Prefixes and suffixes are added when reading `formatted_number`, so the stored value remains clean for sorting, querying, and future formatting changes.

## Receipt-Driven Invoices

`auto_invoice_on_receipt` controls whether receipt creation can automatically generate invoices for registered payments when the wallet has enough balance.

You can override this behavior per receipt call:

```php
$user->createReceipt(1000, 'Initial credit', now(), autoInvoice: false);
```

## PDF Storage

When `pdf.enabled` is `true`, generated PDF paths are saved in:

```text
account_statements.document
```

Use `pdf.disk` and `pdf.path` to control where generated documents are stored.

## Credit Note Behavior

Credit notes are always manual. Splitting a payment never creates a credit note automatically.

