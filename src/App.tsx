import React, { Fragment } from 'react';
import { IonApp } from '@ionic/react';
import { connect } from 'react-redux'
import { addToCart, updateCartQuantity, removeFromCart } from './redux/actions/cartActions';

/* Custom Project */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Header */
import HeaderApp from './components/Header/Header';
import FooterApp from './components/Footer/Footer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Template Pongo CSS */
import './assets/plugins/bootstrap/dist/css/bootstrap.min.css'
import './assets/plugins/font-awesome/css/font-awesome.min.css'
import './assets/plugins/bootstrap-daterangepicker/daterangepicker.css'
import './assets/plugins/animate/animate.css'
import './assets/css/main.css'
import './assets/css/pdv.css'

/* Material Design */
import './assets/fonts/iconic/css/material-design-iconic-font.min.css';

/* Template Pongo JS */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Theme variables */
import './theme/variables.css';
import Selector from './pages/Selector';

import Main from './pages/Main';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Distribuidores from './pages/Distribuidores';
import Novedades from './pages/Novedades';
import Contacto from './pages/Contacto';
import MainCart from './pages/MainCart';

/* Import Local Styles */
import './assets/rafmexassets/App.css';
import './assets/rafmexassets/Main.css';
import './assets/rafmexassets/util.css';
import './assets/rafmexassets/css/extras.css';

import Bg01 from './assets/img/bg-01.jpg';

/* antd */
import 'antd/dist/antd.css';

/* dotenv */
require('dotenv').config()

class App extends React.Component {
  state = {
    componentTitle: 'Productos',
    showModalInfo: {}
  };
  changePage = (component: string) => {
    this.setState({ componentTitle: component });
    window.history.pushState("", "", `/${component.toLowerCase()}`);
  };
  showModalInfo = (data:any) => {
    this.setState({ showModalInfo: data });
  };
  render() {
    const { componentTitle, showModalInfo } = this.state;
    return (
      <IonApp style={{ overflowY: 'scroll' }}>
        <Router>
          <Fragment>
            <div style={{ paddingTop: '50px' }}>
              <HeaderApp changePage={this.changePage} showModalInfo={this.showModalInfo}/>
                <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${Bg01})` }}>
                  <h2 className="ltext-105 cl0 txt-center">
                      {componentTitle}
                  </h2>
                </section>
                { componentTitle === 'Nosotros' &&        <Nosotros /> ||
                  componentTitle === 'Contacto' &&        <Contacto /> ||
                  componentTitle === 'Distribuidores' &&  <Distribuidores /> ||
                  componentTitle === 'Main' &&            <Main /> ||
                  componentTitle === 'Novedades' &&       <Novedades /> ||
                  componentTitle === 'Productos' &&       <Productos showModalInfo={showModalInfo}/> ||
                  componentTitle === 'Carrito' &&         <MainCart />
                }
              <FooterApp />
            </div>
          </Fragment>
        </Router>
      </IonApp>
    )
  }
};

const mapStateToProps = (state: any) => {

  return {
    //products: state.product.products,
    cart: state.cart.cart
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (item: object) => {
      dispatch(addToCart(item));
    },
    updateCartQuantity: (productId: any, quantity: any) => dispatch(updateCartQuantity(productId, quantity)),
    removeFromCart: (productId: number) => dispatch(removeFromCart(productId))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
