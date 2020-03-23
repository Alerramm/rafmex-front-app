import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions';
import ProductDetailimage01 from '../../assets/img/novedades/nove1.jpg';
import ProductDetailimage02 from '../../assets/img/prod-02.jpg';
import ProductDetailimage03 from '../../assets/img/prod-03.jpg';
import IconClose from '../../assets/img/icons/icon-close.png';
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { updateCartQuantity, removeFromCart } from '../../redux/actions/cartActions';

const ModalInfo = (props: any) => {
    const val = React.useRef();
    const { showModal, closeModal, titleCard: title, description, price, id, yes } = props;
    const [count, setCount] = useState(1);

    useEffect(() => {
        val.current = props;
    },[props]);

    useEffect(() => {
        return () => {
            setCount(1);
        };
    }, []);

    const destroyModal = () => {
        setCount(1);
        return closeModal();
    };

    const addToCart = (item: object) => {
        props.addToCart(item);
        openNotification(item);
    }

    const openNotification = (item: any) => {
        notification.open({
            message: 'Se agregó el producto al carrito',
            description: item.title,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    let hideOrShow = '';
    if (!yes) {
        hideOrShow = showModal;
    } else {
        hideOrShow = showModal === '' ? 'show-modal1' : '';
    }

    return (
        <div className={`wrap-modal1 js-modal1 p-t-60 p-b-20 ${hideOrShow}`}>
            <div className="overlay-modal1 js-hide-modal1"></div>

            <div className="container">
                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <button onClick={() => destroyModal()} className="how-pos3 hov3 trans-04 js-hide-modal1">
                        <img src={IconClose} alt="CLOSE" />
                    </button>

                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="pos-relative wrap-pic-w" style={{ maxWidth: '100%', maxHeight: '100%', paddingLeft: '50px' }}>
                                <img src="/static/media/nove1.fe41bcf1.jpg" alt="IMG-PRODUCT" />
                                <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
                                    <i className="fa fa-expand"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5 p-b-30">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {title}
                                </h4>

                                <span className="mtext-106 cl2">
                                    {price}
                                </span>

                                <p className="stext-102 cl3 p-t-23">
                                    {description}
                                </p>

                                <div className="p-t-33">
                                </div>

                                <div className="flex-w flex-r-m p-b-10">
                                    <div className="size-204 flex-w flex-m respon6-next">
                                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                            <div onClick={() => setCount(prevCount => prevCount - 1)} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                <i className="fs-16 zmdi zmdi-minus"></i>
                                            </div>

                                            <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={count} />

                                            <div onClick={() => setCount(prevCount => prevCount + 1)} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                <i className="fs-16 zmdi zmdi-plus"></i>
                                            </div>
                                        </div>

                                        <button onClick={() => addToCart({ id, title, description, price, amount: count })} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                            Agregar al Carrito
                                            </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                <div className="flex-m bor9 p-r-10 m-r-11">
                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                        <i className="zmdi zmdi-favorite"></i>
                                    </a>
                                </div>

                                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>

                                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

const mapStateToProps = (state: any) => {

    return {
        //products: state.product.products,
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeFromCart: (productId: number) => dispatch(removeFromCart(productId)),
        addToCart: (item: object) => {
            dispatch(addToCart(item));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalInfo)
