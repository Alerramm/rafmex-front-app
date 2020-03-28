const mensajes = [
    { status: 'approved', status_detail:	'accredited', message:	'Listo, se acreditó tu pago! En tu resumen verás el cargo de amount como statement_descriptor.' },
    { status: 'in_process', status_detail:	'pending_contingency', message:	'Estamos procesando el pago.En menos de 2 días hábiles te enviaremos por e-mail el resultado.' },
    { status: 'in_process', status_detail:	'pending_review_manual', message:	'Estamos procesando el pago. En menos de 2 días hábiles te diremos por e-mail si se acreditó o si necesitamos más información.' },
    { status: 'rejected', status_detail:	'cc_rejected_bad_filled_card_number', message:	'Revisa el número de tarjeta.' },
    { status: 'rejected', status_detail:	'cc_rejected_bad_filled_date', message:	'Revisa la fecha de vencimiento.' },
    { status: 'rejected', status_detail:	'cc_rejected_bad_filled_other', message:	'Revisa los datos.' },
    { status: 'rejected', status_detail:	'cc_rejected_bad_filled_security_code', message:	'Revisa el código de seguridad.' },
    { status: 'rejected', status_detail:	'cc_rejected_blacklist', message:	'No pudimos procesar tu pago.' },
    { status: 'rejected', status_detail:	'cc_rejected_call_for_authorize', message:	'Debes autorizar ante payment_method_id el pago de amount a Mercado Pago.'},
    { status: 'rejected', status_detail:	'cc_rejected_card_disabled', message:	'Llama a payment_method_id para que active tu tarjeta.El teléfono está al dorso de tu tarjeta.' },
    { status: 'rejected', status_detail:	'cc_rejected_card_error', message:	'No pudimos procesar tu pago.' },
    { status: 'rejected', status_detail:	'cc_rejected_duplicated_payment', message:	'Ya hiciste un pago por ese valor.Si necesitas volver a pagar usa otra tarjeta u otro medio de pago.' },
    { status: 'rejected', status_detail:	'cc_rejected_high_risk', message:	'Tu pago fue rechazado.Elige otro de los medios de pago, te recomendamos con medios en efectivo.' },
    { status: 'rejected', status_detail:	'cc_rejected_insufficient_amount', message:	'Tu payment_method_id no tiene fondos suficientes.' },
    { status: 'rejected', status_detail:	'cc_rejected_invalid_installments', message:	'payment_method_id no procesa pagos en installments cuotas.' },
    { status: 'rejected', status_detail:	'cc_rejected_max_attempts', message:	'Llegaste al límite de intentos permitidos.Elige otra tarjeta u otro medio de pago.' },
    { status: 'rejected', status_detail:	'cc_rejected_other_reason', message:	'payment_method_id no procesó el pago.' }
];

export default mensajes;