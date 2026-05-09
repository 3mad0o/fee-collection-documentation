# Getting Started

FeeCollection is installed into an existing Laravel application.

## Requirements

- PHP 8.3+
- Laravel 13+

## Install the Package

```bash
composer require 3mad/fee-collection
```

If your application does not auto-discover service providers, register the package provider manually:

```php
Emad\FeeCollection\Providers\FeeCollectionServiceProvider::class
```

## Optional PDF Support

Install DomPDF if your application should generate and store invoice, receipt, or credit note PDFs:

```bash
composer require barryvdh/laravel-dompdf
```

PDF generation is controlled by the `pdf.enabled` config option.

## Publish Package Files

Publish the configuration file:

```bash
php artisan vendor:publish --provider="Emad\FeeCollection\Providers\FeeCollectionServiceProvider" --tag=config
```

Publish the default PDF Blade views:

```bash
php artisan vendor:publish --provider="Emad\FeeCollection\Providers\FeeCollectionServiceProvider" --tag=views
```

Published views are placed in:

```text
resources/views/vendor/fee-collection/pdf
```

## Run Migrations

```bash
php artisan migrate
```

The migrations create these tables:

- `upcoming_payments`
- `account_statements`
- `account_statement_upcoming_payments`
- `wallet_transactions`

`wallet_transactions` stores a single current balance row per walletable model.

## Prepare a Payable Model

Add the `UseFeeable` trait to any Eloquent model that should own payments and statements.

```php
use Emad\FeeCollection\Traits\UseFeeable;

class User extends Model
{
    use UseFeeable;
}
```

After this, the model can register payments, create receipts, generate due invoices, query statements, and read its wallet balance.

