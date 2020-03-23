import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux'
import { addToCart, updateCartQuantity, removeFromCart, modifyCart } from '../redux/actions/cartActions';
import { DeleteFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
const mercadopago = require('mercadopago');

const MainCart = (props: any) => {
    console.log('MP-----', mercadopago.global  )
    const didMountRef = useRef(false);
    const { cart } = props;
    const [count, setCount] = useState(0);
    const [state, setState] = useState({
        subtotal: '',
        totalPrice: 0,
        eachTotals: [],
        items: [],
    });
    //const tempEachTotals = [];
    useEffect(() => {
        if (didMountRef.current) {
            const mapped = props.cart.map((i:any) => i.product);
            handleSetCart(mapped);
        } else {
            const mapped = cart.map((i:any) => i.product);
            handleSetCart(mapped);
            didMountRef.current = true;
        }
    },[props]);
    
    const handleRemove = (id: number) => {
        props.removeFromCart(id);
    };

    const handleSetCart = (items:any) => {
        const tempTotal = items
            .map((i:any) => i.price * Number(i.amount))
            .reduce((i:any, c:any) => i + c, 0 );
        const totalPrice = Math.round((tempTotal + Number.EPSILON) * 100) / 100;
        setState({ ...state, totalPrice, items });
    }

    const quantityModify = (idSelected:number, value:string) => {
        const { items } = state;       
        const modifier = items.map((item:any,index:any) => {
            return {
                ...item,
                amount: idSelected === item.id ? item.amount + Number(value) : item.amount
            }
        });
        props.modifyCart(modifier);
        handleSetCart(modifier);
    };

    const checkPayment = () => {
        mercadopago.configure({
            access_token: process.env.REACT_APP_ACCESS_TOKEN
        });
        const items = cart
            .map((i:any) => i.product)
            .map((i:any) => {
                return {
                    title: i.title,
                    unit_price: i.price,
                    quantity: i.amount
                }
            });
        const preference = { items };
        mercadopago.preferences.create(preference)
        .then((response:any) => {
        // Este valor reemplazará el string "$$init_point$$" en tu HTML
        //global.init_point = response.body.init_point;
        console.log('hola-------', response.body.init_point)
        }).catch((error:any) => {
            console.log(error);
        });
    };

    const { totalPrice, items } = state;
    return (
        <>
            {cart.length !== 0 && (
                <form className="bg0 p-t-75 p-b-85">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-lr-auto m-b-50">
                                <div className="m-l-25 m-r--38 m-lr-0-xl">
                                    <div className="wrap-table-shopping-cart">
                                        <table className="table-shopping-cart">
                                            <tr className="table_head">
                                                <th className="column-1 rmx-center">Producto</th>
                                                <th className="column-1 rmx-center">Cantidad</th>
                                                <th className="column-1 rmx-center">Precio</th>
                                                <th className="column-1 rmx-center">Total</th>
                                                <th className="column-1 rmx-center">Borrar</th>
                                            </tr>
                                            {items.length !== 0 && items.map((item: any) => {
                                                const { id, title, description, amount, price } = item;

                                                return (
                                                    <tr className="table_row">
                                                        <td className="column-1 rmx-center">{title}</td>
                                                        <td className="column-1 rmx-center">
                                                            <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                                <div onClick={() => quantityModify(id, '-1')} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-minus"></i>
                                                                </div>
                                                                <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={amount} />
                                                                <div onClick={() => quantityModify(id, '+1')} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-plus"></i>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="column-1 rmx-center">{price}</td>
                                                        <td className="column-1 rmx-center">{`$ ${amount * Number(price)}`}</td>
                                                        <td className="column-1 rmx-center">
                                                            <div className="rmx-cursor-hand" onClick={() => handleRemove(id)}>
                                                                <Tooltip placement="top" title="Quitar del carrito">
                                                                    <DeleteFilled style={{ color: '#d20202', fontSize: 'xx-large' }} />
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {items.length !== 0 && (                    
                            <div className="row">
                                <div className="col-lg-10 m-lr-auto m-b-50">
                                    <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                        <h4 className="mtext-109 cl2 p-b-30">
                                            Pago
                                        </h4>

                                        <div className="flex-w flex-t bor12 p-b-13">
                                            <div className="size-208">
                                                <span className="stext-110 cl2">
                                                    Subtotal:
                                                </span>
                                            </div>

                                            <div className="size-209">
                                                <span className="mtext-110 cl2">
                                                    {`$ ${totalPrice}`}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-w flex-t p-t-27 p-b-33">
                                            <div className="size-208">
                                                <span className="mtext-101 cl2">
                                                    Total:
                                                </span>
                                            </div>

                                            <div className="size-209 p-t-1">
                                                <span className="mtext-110 cl2">
                                                {`$ ${totalPrice}`}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-4 offset-8">
                                            <button onClick={() => checkPayment()} className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                                                Proceder al Pago
                                            </button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </form>
            ) || (
                    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundColor: 'white', padding: '300px 0 300px 0' }}>
                        <h2 className="ltext-105 txt-center">
                            Tu carrito de compras esta vacío
                    </h2>
                    </section>
                )}
        </>
    )
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
        modifyCart: (item: object) => {
            dispatch(modifyCart(item))
        },
        updateCartQuantity: (productId: any, quantity: any) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId: number) => dispatch(removeFromCart(productId))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainCart)