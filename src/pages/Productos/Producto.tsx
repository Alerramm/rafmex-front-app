import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux'
import { fetchApi } from '../../fetchApi/fetchApi';
import ModalInfo from './ModalInfo';
import ImageDemo from '../../assets/img/imageDemo.jpg';
import IconHeart1 from '../../assets/img/icons/icon-heart-01.png';
import IconHeart2 from '../../assets/img/icons/icon-heart-02.png';

const Producto = (props: any) => {
    const didMountRef = useRef(false);
    const { producto, url, loader, showModalInfo } = props;

    const [state, setState] = useState({
        price: 0,
        items: [],
        producto: '',
        id: 0,
        showModal: '',
        titleCard: '',
        description: '',
        showModalAny: Object.values(showModalInfo).length !== 0,
        showModalFromCart: {}
    });

    const showInfoModal = (data: any) => {
        const { titleCard, description, price, id } = data;
        setState({ ...state, titleCard, description, showModal: 'show-modal1', price, id });
    };

    useEffect(() => {
        if (didMountRef.current) {
            fetchApi(`productos${props.url}`, 'GET')
                .then(response => {
                    setState({ ...state, items: response });
                    loader(false);
                });
        } else {
            const isShowModalFromCart = Object.values(showModalInfo).length !== 0;
            const { titleCard, description, price, id } = showModalInfo;
            showInfoModal({ titleCard, description, price, id });
            setState({ ...state, showModalAny: isShowModalFromCart });
            fetchApi(`productos${url}`, 'GET')
                .then(response => {
                    setState({ ...state, items: response });
                    loader(false);
                });
            didMountRef.current = true
        }
    }, [url]);

    const closeModal = () => {
        setState({ ...state, showModal: '' });
    };

    const generateRandom = () => {
        const { ids } = props;
        const max = 1000;
        const random = Math.random() * (max - 1) + 1;
        const intRandom = Math.round(random);
        if (ids.includes(intRandom)) {
            ids.length === max ? console.log('lleno') : generateRandom();
        } else {
            return intRandom;
        }
    }

    const { items, showModal, titleCard, description, price, id, showModalFromCart, showModalAny } = state;
    const show = !!showModal || !showModalAny;
    return (
        <div className="container">
            <h4 className="mtext-113 cl2 p-b-30">
                {producto}
            </h4>
            <div className="row isotope-grid">
                {items.map(item => {
                    const id = generateRandom();
                    const { title: titleCard, description, img_url, price } = item;
                    return (
                        <div key={titleCard} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" style={{ cursor: 'pointer' }}>
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    {/* <img src="images/product-01.jpg" alt="IMG-PRODUCT" /> */}
                                    <img src={ImageDemo} alt="IMG-PRODUCT" />
                                    <div onClick={() => showInfoModal({ titleCard, description, price, id })} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Ver Detalles
                                    </div>
                                </div>
                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <div className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            {titleCard}
                                        </div>
                                        <span className="stext-105 cl3">
                                            {/* {titleCard} */}
                                            {price}
                                        </span>
                                    </div>
                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04" src={IconHeart1} alt="ICON" />
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l" src={IconHeart2} alt="ICON" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {show && (
                <ModalInfo
                    id={!showModalAny ? id : showModalInfo.id}
                    price={!showModalAny ? price : showModalInfo.price}
                    closeModal={!showModalAny ? closeModal : showModalInfo.closeModal}
                    showModal={showModal}
                    titleCard={!showModalAny ? titleCard : showModalInfo.titleCard}
                    description={!showModalAny ? description : showModalInfo.description}
                    yes={Object.values(showModalInfo).length !== 0}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        ids: state.actions.ids
    }
}

export default connect(mapStateToProps)(Producto);