import React, { useState, useEffect, useRef } from "react";
import Logo from '../../assets/img/icons/logo.png';
/* Cart */
import Cart from '../../../src/pages/Cart/Cart';
import { connect } from 'react-redux'

const HeaderApp = (props: any) => {

    const didMountRef = useRef(false);
    const { cart, changePage, showModalInfo } = props;
    const [state, setState] = useState({ showCart: '' });
    const flag = cart.length !== 0;

    useEffect(() => {
        const handleProps = () => {
            if (flag) {
                //console.log('update', flag);
            } else {
                //console.log('noUpdate', flag);
            }
        };
        handleProps();
        return () => {
            handleProps();
        }
    }, [flag]);

    const activatCart = (e: any) => {
        e.preventDefault();
        setState({ ...state, showCart: 'show-header-cart' });
    };
    const closeModal = () => {
        setState({ ...state, showCart: '' })
    };

    const changeComponent = (name: string) => {
        return changePage(name);
    };

    const gotoCart = () => {
        setState({ ...state, showCart: '' })
        return changePage('Carrito');
    };

    const showModal = (data:any) => {
        return showModalInfo(data);
    };

    const items = cart.length;
    const { showCart } = state;
    const iconNoti = items !== 0 ? 'icon-header-noti' : '';
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
                                        <button onClick={() => changeComponent("Main")}>Inicio</button>
                                    </li>

                                    <li>
                                        <button onClick={() => changeComponent("Nosotros")}>Nosotros</button>
                                    </li>

                                    <li>
                                        <button onClick={() => changeComponent("Productos")}>Productos</button>
                                    </li>

                                    <li>
                                        <button onClick={() => changeComponent("Distribuidores")}>Distribuidores</button>
                                    </li>

                                    <li>
                                        <button onClick={() => changeComponent("Novedades")}>Novedades</button>
                                    </li>

                                    <li>
                                        <button onClick={() => changeComponent("Contacto")}>Contacto</button>
                                    </li>
                                </ul>
                            </div>


                            <div onClick={(e) => activatCart(e)} className="wrap-icon-header flex-w flex-r-m">
                                <div style={{fontSize: '50px'}} className={`icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 js-show-cart ${iconNoti}`} data-notify={items}>
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
                <Cart showModal={showModal} showCart={showCart} closeModal={closeModal} changeComponent={gotoCart}/>
            </header>
        </div>
    );

};

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(HeaderApp);