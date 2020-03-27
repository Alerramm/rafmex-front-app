import React from 'react';
import Card from 'react-credit-cards';

const SupportedCards = () => {
    return (
      <div className="App-cards">
        <h3>Aceptamos la mayoría de tarjetas de crédito y débito.</h3>
        <div className="App-cards-list">
          <Card
            name="Ivan Saldaña"
            number="5555 4444 3333 1111"
            expiry="10/20"
            cvc="737"
          />

          <Card
            name="Ivan Saldaña"
            number="4111 1111 1111 1111"
            expiry="10/20"
            cvc="737"
          />

          <Card
            name="Ivan Saldaña"
            number="3700 0000 0000 002"
            expiry="10/20"
            cvc="737"
          />

          <Card
            name="Ivan Saldaña"
            number="3600 666633 3344"
            expiry="10/20"
            cvc="737"
          />
          <Card
            name="Ivan Saldaña"
            number="6011 6011 6011 6611"
            expiry="10/20"
            cvc="737"
          />

          <Card
            name="Ivan Saldaña"
            number="5066 9911 1111 1118"
            expiry="10/20"
            cvc="737"
          />

          <Card
            name="Ivan Saldaña"
            number="6250 9460 0000 0016"
            expiry="10/20"
            cvc="737"
          />

          <Card
            name="Ivan Saldaña"
            number="6062 8288 8866 6688"
            expiry="10/20"
            cvc="737"
          />

          <Card
            name="Ivan Saldaña"
            number="**** **** **** 7048"
            expiry="10/20"
            cvc="737"
            preview={true}
            issuer="visa"
          />
        </div>
      </div>
    );
}

export default SupportedCards;
