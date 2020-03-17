import React, { useEffect, useState, useRef } from 'react';
import {fetchApi} from '../../fetchApi/fetchApi';
import ModalInfo from './ModalInfo';
import ImageDemo from '../../assets/img/imageDemo.jpg';
import IconHeart1 from '../../assets/img/icons/icon-heart-01.png';
import IconHeart2 from '../../assets/img/icons/icon-heart-02.png';

const Producto = (props:any) => {
    const didMountRef = useRef(false);
    const { producto, url, loader } = props;
    const [state, setState] = useState({
        price: 0,
        items: [],
        producto: '',
        id: 0,
        showModal: '',
        titleCard: '', 
        description: '',
    });
	useEffect(() => {
        if (didMountRef.current) {
            fetchApi(`productos${props.url}`, 'GET')
			.then(response => {
                setState({ ...state, items: response });
                loader(false);
            });
        } else {
            fetchApi(`productos${url}`, 'GET')
			.then(response => {
                setState({ ...state, items: response });
                loader(false);
            });
            didMountRef.current = true
        }
    }, [url]);

    const showInfoModal = (titleCard:string, description:string, price: number, id: number) => {
        setState({ ...state, titleCard, description, showModal: 'show-modal1', price, id });
    };

    const closeModal = () => {
        setState({ ...state, showModal: '' });
    };

    const { items, showModal, titleCard, description, price, id } = state;
    return (
        <div className="container">
            <h4 className="mtext-113 cl2 p-b-30">
                {producto}
            </h4>
            <div className="row isotope-grid">
                {items.map((item,index) => {
                    const { title:titleCard, description, img_url, price } = item;
                    return (
                        <div key={titleCard} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" style={{ cursor: 'pointer' }}>
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    {/* <img src="images/product-01.jpg" alt="IMG-PRODUCT" /> */}
                                    <img src={ImageDemo} alt="IMG-PRODUCT" />
                                    <div onClick={() => showInfoModal(titleCard, description, price, index)} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
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
            <ModalInfo
                id={id}
                price={price}
                closeModal={closeModal}
                showModal={showModal}
                titleCard={titleCard}
                description={description}
            />
        </div>
    )
}

export default Producto;