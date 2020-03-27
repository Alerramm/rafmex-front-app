export const mercadoPagoInit = () => {
    window.Mercadopago.setPublishableKey(process.env.REACT_APP_PUBLIC_KEY);
};

export const sdkResponseHandler = (status, response) => {
    if (status != 200 && status != 201) {
        alert("verify filled data");
    }else{
        var form = document.querySelector('#pay');
        var card = document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('type', 'hidden');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        return;
    }
};

export const captureSubmit = (form) => {
    window.Mercadopago.createToken(form, sdkResponseHandler);
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

export const guessingPaymentMethod = bin => {
    window.Mercadopago.getPaymentMethod({
        "bin": bin
    }, setPaymentMethodInfo);
};

export const prueba = form => console.log('form----', form);

export const setPaymentMethodInfo = (status, response) => {
    console.log('=====--------', response);
    if (status == 200) {
        const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

        if (paymentMethodElement) {
            paymentMethodElement.value = response[0].id;
        } else {
            const input = document.createElement('input');
            input.setAttribute('name', 'paymentMethodId');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', response[0].id);

            //form.appendChild(input);
        }

        // Mercadopago.getInstallments({
        //     "bin": getBin(),
        //     "amount": parseFloat(document.querySelector('#amount').value),
        // }, setInstallmentInfo);

    } else {
        alert(`payment method info error: ${response}`);
    }
};

export const setInstallmentInfo = (status, response) => {
    const selectorInstallments = document.querySelector("#installments"),
    fragment = document.createDocumentFragment();
    selectorInstallments.options.length = 0;

    if (response.length > 0) {
        var option = new Option("Escolha...", '-1'),
        payerCosts = response[0].payer_costs;
        fragment.appendChild(option);

        for (var i = 0; i < payerCosts.length; i++) {
            fragment.appendChild(new Option(payerCosts[i].recommended_message, payerCosts[i].installments));
        }

        selectorInstallments.appendChild(fragment);
        selectorInstallments.removeAttribute('disabled');
    }
};