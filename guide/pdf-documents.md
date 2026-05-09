# PDF Documents

FeeCollection can generate and store PDF documents for invoices, receipts, and credit notes.

## Install PDF Support

```bash
composer require barryvdh/laravel-dompdf
```

## Enable or Disable PDF Generation

PDF generation is controlled by `config/fee_collection.php`:

```php
'pdf' => [
    'enabled' => env('FEE_COLLECTION_PDF_ENABLED', true),
    'paper' => 'a4',
    'orientation' => 'portrait',
    'disk' => env('FEE_COLLECTION_PDF_DISK', 'public'),
    'path' => env('FEE_COLLECTION_PDF_PATH', 'fee-collection/documents'),
],
```

Useful environment variables:

```text
FEE_COLLECTION_PDF_ENABLED=true
FEE_COLLECTION_PDF_DISK=public
FEE_COLLECTION_PDF_PATH=fee-collection/documents
```

## Publish Default Views

```bash
php artisan vendor:publish --provider="Emad\FeeCollection\Providers\FeeCollectionServiceProvider" --tag=views
```

Published views are placed in:

```text
resources/views/vendor/fee-collection/pdf
```

## Configure Views

```php
'invoice_view' => 'fee-collection::pdf.invoice',
'receipt_view' => 'fee-collection::pdf.receipt',
'credit_note_view' => 'fee-collection::pdf.invoice',
```

## Generate a PDF Manually

```php
$statement = $user->accountStatements()->latest('id')->first();
$pdf = $statement->toPdf();

return $pdf->download($statement->formatted_number . '.pdf');
```

When PDF generation is enabled, the generated PDF path is saved in `account_statements.document`.
