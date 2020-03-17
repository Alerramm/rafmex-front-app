import React, { useState } from "react";
import Logo from '../../assets/img/icons/logo.png';
/* Cart */
import Cart from '../../../src/pages/Cart/Cart';
import { connect } from 'react-redux'

const HeaderApp: React.FC = (props:any) => {
    const [state, setState ] = useState({ showCart: '' });

    const activatCart = (e:any) => {
        e.preventDefault();
        setState({ showCart: 'show-header-cart' });
    };
    const closeModal = () => {
        setState({ ...state, showCart: '' })
    };

    const items = props.cart.lenght;
    const { showCart } = state;
    return (
        <div className="row">
            <header>
                <div className="container-menu-desktop">
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                
                            </div>

                            <div className="right-top-bar flex-w h-full">

                                <a href="https://www.facebook.com/Rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <a href="https://www.instagram.com/rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
                                    <i className="fa fa-instagram"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">
                            
                            <a href="/index" className="logo">
                                <img src={Logo} alt="IMG-LOGO" />
                            </a>

                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu">
                                         <a href="/index">Inicio</a>
                                    </li>

                                    <li>
                                        <a href="/nosotros">Nosotros</a>
                                    </li>

                                    <li>
                                        <a href="/productos">Productos</a>
                                    </li>

                                    <li>
                                        <a href="/distribuidores">Distribuidores</a>
                                    </li>

                                    <li>
                                        <a href="/novedades">Novedades</a>
                                    </li>

                                    <li>
                                        <a href="/contacto">Contacto</a>
                                    </li>

                                    <li>
                                        <a href="/comprar">Comprar</a>
                                    </li>
                                </ul>
                            </div>	


                            <div onClick={(e) => activatCart(e)} className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={items}>
                                    <i className="zmdi zmdi-shopping-cart"></i>
                                </div>
                            </div>



                        </nav>
                    </div>	
                </div>

                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a href="/index"><img src={Logo} alt="IMG-LOGO" /></a>
                    </div>



                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>


                <div className="menu-mobile">
                    <ul className="topbar-mobile">


                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="https://www.facebook.com/Rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <a href="https://www.instagram.com/rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
                                    <i className="fa fa-instagram"></i>
                                </a>

                            </div>
                        </li>
                    </ul>

                    <ul className="main-menu-m">
                                    <li>
                                        <a href="/index">Inicio</a>
                                    </li>

                                    <li>
                                        <a href="/nosotros">Nosotros</a>
                                    </li>

                                    <li>
                                        <a href="/productos">Productos</a>
                                    </li>

                                    <li>
                                        <a href="/distribuidores">Distribuidores</a>
                                    </li>

                                    <li>
                                        <a href="/novedades">Novedades</a>
                                    </li>

                                    <li>
                                        <a href="/contacto">Contacto</a>
                                    </li>
                    </ul>
                </div>
                <Cart showCart={showCart} closeModal={closeModal} />
            </header>
        </div>
    );

};

const mapStateToProps = (state:any) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(HeaderApp);