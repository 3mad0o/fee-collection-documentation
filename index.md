---
layout: home

hero:
  name: FeeCollection
  text: Laravel fee workflow package
  tagline: Register upcoming payments, issue invoices and receipts, split payments, handle credit notes, track wallet balances, and generate fee documents.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View Usage
      link: /guide/usage

features:
  - title: Payment Workflows
    details: Register upcoming payments, detect overdue payments, and generate due invoices from payable models.
  - title: Statements and Wallets
    details: Keep account statements recalculated while tracking one current wallet balance row per payable model.
  - title: Documents
    details: Create invoices, receipts, manual credit notes, and optional stored PDF documents.
---

# FeeCollection

FeeCollection is a Laravel package for fee workflows in applications that need scheduled payments, invoices, receipts, credit notes, statement history, and wallet balance tracking.

## Requirements

- PHP 8.3+
- Laravel 13+

## Install

```bash
composer require 3mad/fee-collection
```

Continue with the [getting started guide](/guide/getting-started).
