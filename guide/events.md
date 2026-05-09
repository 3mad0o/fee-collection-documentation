# Events

The package dispatches events after successful workflow changes.

## Dispatched Events

- `Emad\FeeCollection\Events\InvoiceCreated`
- `Emad\FeeCollection\Events\ReceiptCreated`
- `Emad\FeeCollection\Events\CreditNoteCreated`
- `Emad\FeeCollection\Events\PaymentOverdue`
- `Emad\FeeCollection\Events\PaymentSplit`
- `Emad\FeeCollection\Events\InvoiceVoided`

## Common Uses

Use these events to connect fee workflows to application behavior such as:

- customer notifications
- internal audit logs
- reporting updates
- accounting exports
- webhook dispatching

