import React, { useEffect, useState, useRef } from 'react';
import Card from 'react-credit-cards';
import {
  mercadoPagoInit,
  addEvent,
  getBin,
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
        <form ref={(c: any) => (form = c)} onSubmit={(e: any) => handleSubmit(e)}>
          <div className="form-group">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Número de tarjeta"
              pattern="[\d| ]{16,22}"
              required
              onChange={(e: any) => handleInputChange(e)}
              onFocus={(e: any) => handleInputFocus(e)}
            />
            <small>E.g.: 49..., 51..., 36..., 37...</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre"
              required
              onChange={(e: any) => handleInputChange(e)}
              onFocus={(e: any) => handleInputFocus(e)}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Vence Hasta"
                pattern="\d\d/\d\d"
                required
                onChange={(e: any) => handleInputChange(e)}
                onFocus={(e: any) => handleInputFocus(e)}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={(e: any) => handleInputChange(e)}
                onFocus={(e: any) => handleInputFocus(e)}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="form-actions">
            <button className="btn btn-primary btn-block">Pagar</button>
          </div>
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