import React, { useEffect, useState, useRef } from 'react';
import Card from 'react-credit-cards';
import {
  mercadoPagoInit,
  addEvent,
  guessingPaymentMethod,
  setPaymentMethodInfo,
  captureSubmit
} from './MercadoPago';
import SupportedCards from './Cards';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './utils';
import './styles.css';
import 'react-credit-cards/es/styles-compiled.css';

let form = '';

const Checkout = () => {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  });

  const handleCallback = (a: any, isValid: any) => {
    const { issuer } = a;
    if (isValid) {
      setState({ ...state, issuer });
    }
  };

  const handleInputFocus = (e: any) => {
    const { target } = e;
    setState({
      ...state,
      focused: target.name,
    });
  };

  const handleInputChange = (e: any) => {
    const { target } = e;
    const { value } = target;
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
      const formated = target.value.toString().replace(/\s+/g, '');
      if (formated.length >= 6) {
        const len = formated.substring(0,6);
        guessingPaymentMethod(len);
      }
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(value, {});
    }

    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { issuer } = state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setState({ ...state, formData });
    //form.reset();
    handlePayMP(formData);
  };

  const handlePayMP = (data: object) => {
    mercadoPagoInit();
    captureSubmit(data);
  };

  const { name, number, expiry, cvc, focused, issuer, formData } = state;
  return (
    <div key="Payment">
      <div className="App-payment">
        <h3 className="mtext-113 cl2 p-b-16">Continuar con el pago</h3>
        <h4 className="mtext-105 cl2 p-b-16">Por favor ingrese los datos de su tarjeta</h4>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          //focused={focused}
          callback={(a: any, isValid: any) => handleCallback(a, isValid)}
        />
        <form style={{ margin: '30px auto 0', maxWidth: '400px' }} action="/procesar_pago" method="post" id="pay" name="pay" ref={(c: any) => (form = c)} onSubmit={(e: any) => handleSubmit(e)}>
          <fieldset>
            <ul>
              <li>
                <input className="form-control" type="email" id="email" name="email" value="test_user_19653727@testuser.com" placeholder="Correo electrónico" />
              </li>
              <li>
                <input placeholder="Número de tarjeta" name="number" className="form-control" type="text" id="cardNumber" data-checkout="cardNumber" pattern="[\d| ]{16,22}" required onChange={(e: any) => handleInputChange(e)} onFocus={(e: any) => handleInputFocus(e)} />
              </li>
              <li>
                <input name="cvc" placeholder="Vence CVC" className="form-control" type="text" id="securityCode" data-checkout="securityCode" />
              </li>
              <li>


                <div className="row around-xs">
                  <div className="App-badges col-4">
                    <div className="box">
                      <label>Vencimiento:</label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="box">
                      <input className="form-control" type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="00" />
                    </div>
                  </div>
                  <strong><p style={{ fontSize: '1.5rem', marginBottom: '0em' }}>/</p></strong>
                  <div className="col-3">
                    <div className="box">
                      <input className="form-control" type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="0000" />
                    </div>
                  </div>
                </div>


              </li>
              <li>
                <input name="name" placeholder="Nombre" className="form-control" type="text" id="cardholderName" data-checkout="cardholderName" required onChange={(e: any) => handleInputChange(e)} onFocus={(e: any) => handleInputFocus(e)} />
              </li>
              <li>
                <label>Document type:</label>
                <select id="docType" data-checkout="docType"></select>
              </li>
              <li>
                <label>Document number:</label>
                <input className="form-control" type="text" id="docNumber" data-checkout="docNumber" placeholder="12345678" />
              </li>
              <li>
                <label>Installments:</label>
                <select id="installments" className="form-control" name="installments"></select>
              </li>
            </ul>
            <input type="hidden" name="issuer" value={issuer} />
            <input type="hidden" name="amount" id="amount" />
            <input type="hidden" name="description" />
            <input type="hidden" name="paymentMethodId" />
            <input type="submit" value="Pay!" />
          </fieldset>
        </form>
        {formData && (
          <div className="App-highlight">
            {formatFormData(formData).map((d, i) => <div key={i}>{d}</div>)}
          </div>
        )}
        <hr style={{ margin: '30px 0' }} />
        <SupportedCards />
      </div>
    </div>
  )
};

export default Checkout;