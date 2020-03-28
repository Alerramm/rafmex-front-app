import messages from './mensajes';

let getBin = '';
let getId = '';
let getIssuer = {};

export const mercadoPagoInit = () => {
    window.Mercadopago.setPublishableKey(process.env.REACT_APP_PUBLIC_KEY);
};

export const sdkResponseHandler = (status, response) => {
    if (status != 200 && status != 201) {
        alert("verify filled data");
        return;
    } else {
        var form = document.querySelector('#pay');
        var card = document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('type', 'hidden');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        getId = response.id;
    }
};

export const captureSubmit = (form, formTotal) => {
    window.Mercadopago.createToken(formTotal, sdkResponseHandler);
    /* Aqui se hace el pago */
    payment(getId, getIssuer);
};

export const addEvent = (to, type, fn) => {
    if (document.addEventListener) {
        to.addEventListener(type, fn, false);
    } else if (document.attachEvent) {
        to.attachEvent('on' + type, fn);
    } else {
        to['on' + type] = fn;
    }
};

function setPaymentMethodInfo(status, response) {
    if (status == 200) {
        const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');
        
        getIssuer = response.issuer;

        if (paymentMethodElement) {
            paymentMethodElement.value = response[0].id;
        } else {
            const input = document.createElement('input');
            const formData = document.querySelector('form');
            input.setAttribute('name', 'paymentMethodId');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', response[0].id);
            formData.appendChild(input);
        }

        window.Mercadopago.getInstallments({
            "bin": getBin,
            "amount": parseFloat(document.querySelector('#amount').value),
        }, setInstallmentInfo);

    } else {
        alert(`payment method info error: ${response}`);
    }
};

export const guessingPaymentMethod = bin => {
    getBin = bin;
    window.Mercadopago.getPaymentMethod({
        "bin": bin
    }, setPaymentMethodInfo);
};

export const setInstallmentInfo = (status, response) => {
    getIssuer = response[0].issuer;
    const selectorInstallments = document.querySelector("#installments"),
        fragment = document.createDocumentFragment();
    selectorInstallments.options.length = 0;

    if (response.length > 0) {
        var option = new Option("Seleccione una opción...", '-1'),
            payerCosts = response[0].payer_costs;
        fragment.appendChild(option);

        for (var i = 0; i < payerCosts.length; i++) {
            fragment.appendChild(new Option(payerCosts[i].recommended_message, payerCosts[i].installments));
        }

        selectorInstallments.appendChild(fragment);
        selectorInstallments.removeAttribute('disabled');
    }
};

export const payment = (token, getIssuer) => {
    const mercadopago = require('mercadopago');
    mercadopago.configurations.setAccessToken(process.env.REACT_APP_ACCESS_TOKEN);
    const transaction_amount = document.getElementsByName('amount')[0].value;
    const description = document.getElementsByName('description')[0].value;
    const payment_method_id = document.getElementsByName('paymentMethodId')[0].value;
    //const token = document.getElementsByName('token')[0].value;
    const email = document.getElementById('email').value;
    const { id: issuer_id } = getIssuer;

    const payment_data = {
        transaction_amount: 154,
        token : 'bb8e9890831127521222c680a50659ad',
        description: 'Durable Iron Keyboard',
        installments: 3,
        payment_method_id,
        issuer_id,
        payer: {
            email
        }
    };

    // Save and posting the payment
    mercadopago.payment.save(payment_data)
        .then(data => {
            console.log(data);
            //res.send(data);
        }).catch(error => {
            console.log(error);
        });
};