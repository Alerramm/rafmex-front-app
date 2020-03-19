import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux'
import { addToCart, updateCartQuantity, removeFromCart } from '../redux/actions/cartActions';
import { DeleteFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';

const MainCart = (props: any) => {
    const didMountRef = useRef(false);
    const { cart } = props;
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (didMountRef.current) {
            console.log('actualizacion-----------------', props);
        } else {
            console.log('montaje-----------------', props);
            didMountRef.current = true;
        }
    });

    const handleRemove = (id:number) => {
        props.removeFromCart(id);
    };

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
                                            {cart.map((item: any) => {
                                                const { id, title, description, amount, price } = item.product;
                                                const totalXitems = parseFloat(price) * amount;
                                                const totalCant = Math.round((totalXitems + Number.EPSILON) * 100) / 100;
                                                return (
                                                    <tr className="table_row">
                                                        <td className="column-1 rmx-center">{title}</td>
                                                        <td className="column-1 rmx-center">
                                                            <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                                <div onClick={() => setCount(prevCount => prevCount - 1)} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-minus"></i>
                                                                </div>
                                                                <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={amount} />
                                                                <div onClick={() => setCount(prevCount => prevCount + 1)} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-plus"></i>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="column-1 rmx-center">{price}</td>
                                                        <td className="column-1 rmx-center">{`$ ${totalCant}`}</td>
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

                            {/* <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                                <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                    <h4 className="mtext-109 cl2 p-b-30">
                                        Cart Totals
                                    </h4>

                                    <div className="flex-w flex-t bor12 p-b-13">
                                        <div className="size-208">
                                            <span className="stext-110 cl2">
                                                Subtotal:
                                            </span>
                                        </div>

                                        <div className="size-209">
                                            <span className="mtext-110 cl2">
                                                $79.65
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                                        <div className="size-208 w-full-ssm">
                                            <span className="stext-110 cl2">
                                                Shipping:
                                            </span>
                                        </div>

                                        <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                                            <p className="stext-111 cl6 p-t-2">
                                                There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                            </p>

                                            <div className="p-t-15">
                                                <span className="stext-112 cl8">
                                                    Calculate Shipping
                                                </span>

                                                <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                                                    <select className="js-select2" name="time">
                                                        <option>Select a country...</option>
                                                        <option>USA</option>
                                                        <option>UK</option>
                                                    </select>
                                                    <div className="dropDownSelect2"></div>
                                                </div>

                                                <div className="bor8 bg0 m-b-12">
                                                    <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="state" placeholder="State /  country" />
                                                    |                                            </div>

                                                <div className="bor8 bg0 m-b-22">
                                                    <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="postcode" placeholder="Postcode / Zip" />
                                                    |                                            </div>

                                                <div className="flex-w">
                                                    <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                                                        Update Totals
                                                    </div>
                                                </div>

                                            </div>
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
                                                $79.65
                                            </span>
                                        </div>
                                    </div>

                                    <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div> */}
                        </div>
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
        updateCartQuantity: (productId: any, quantity: any) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId: number) => dispatch(removeFromCart(productId))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainCart)