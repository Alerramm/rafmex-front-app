import React, { useEffect, useState } from 'react';
import ItemPic01 from '../../assets/img/novedades/nove1.jpg';
import { connect } from 'react-redux'
import { getCarrito } from '../../redux/actions/actionsActions';

const Cart = (props: any) => {
    const { showCart, closeModal, cart, changeComponent, showModal } = props;

    // const totalAmount = cart.reduce((i:any,a:any) => {
    //     const result = parseFloat(i.product) + parseFloat(a.product.price) * a.product.amount;
    //     return Math.round((result + Number.EPSILON) * 100) / 100
    //  },0);
    const totalAmount = 500;
    // const dataCart = (cartFromCart: any) => {
    //     //infoCart(cartFromCart);
    //     ;
    // };

    return (
        <div className={`wrap-header-cart js-panel-cart ${showCart}`}>
            <div className="s-full js-hide-cart"></div>
            <div className="header-cart flex-col-l p-l-65 p-r-25">
                <div className="header-cart-title flex-w flex-sb-m p-b-8">
                    <span className="mtext-103 cl2">
                        Tu carrito
                    </span>

                    <div onClick={closeModal} className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                        <i className="zmdi zmdi-close"></i>
                    </div>
                </div>
                {cart.lenght !== 0 && (
                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full">
                            {cart.map((item: any) => {
                                const { id, title, price, amount } = item.product;
                                return (
                                    <li className="header-cart-item flex-w flex-t m-b-12" key={title}>
                                        <div className="header-cart-item-img">
                                            <img src={ItemPic01} alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt p-t-8">
                                            <button onClick={() => showModal(item.product)} className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                                {title}
                                            </button>

                                            <span className="header-cart-item-info">
                                                {amount} x {price}
                                            </span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">
                                {`Total: $ ${totalAmount}`}
                            </div>

                            <div className="header-cart-buttons flex-w w-full">
                                <button onClick={() => changeComponent('Carrito')} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    Ver Carrito
                            </button>

                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    COMPRAR
                            </a>
                            </div>
                        </div>

                    </div>
                ) || (
                        <p className="p-b-15">
                            Tu carrito de compras esta vacío
                    </p>
                    )}
            </div>
        </div>
    )
};


const mapStateToProps = (state: any) => {
    return {
        //products: state.product.products,
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);