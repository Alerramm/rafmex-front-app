import React, { useEffect, useState } from 'react';
import path from 'path';
import Producto from '../pages/Productos/Producto';
import {fetchApi} from '../fetchApi/fetchApi';
import Banner01 from '../assets/img/banner-01.jpg';
import Banner02 from '../assets/img/banner-02.jpg';
import Banner03 from '../assets/img/banner-03.jpg';
import Banner04 from '../assets/img/banner-04.jpg';
import Banner05 from '../assets/img/banner-05.jpg';
import Banner06 from '../assets/img/banner-06.jpg';
import Banner07 from '../assets/img/banner-07.jpg';
import Banner09 from '../assets/img/banner-09.jpg';
const images = [Banner01,Banner02,Banner03,Banner04,Banner05,Banner06,Banner07,Banner09];

const Productos: React.FC = () => {
    const [state, setState] = useState({
        items: [],
        isGeneral: true,
        product: '',
	});
	useEffect(() => {
		fetchApi('items/products', 'GET')
			.then(response => {
				setState({ ...state, items: response });
			});
        }, []);
    const goProduct = (product: string) => {
        setState({ ...state, isGeneral: false, product });
    };
    const { items, isGeneral, product } = state;
    return (
        <div>
            <div className="sec-banner bg0 p-t-80 p-b-50">
                {isGeneral && (
                <div className="container">
                    <div className="row">
                        {items.map((item, index) => {
                            const {title, img_url} = item;
                            return(
                                <div style={{cursor:'pointer ! important'}} className="col-md-6 col-xl-3 p-b-30 m-lr-auto" key={title}>
                                    <div className="block1 wrap-pic-w">
                                        <img src={images[index]} alt="IMG-BANNER" />
                                        <div  onClick={() => goProduct(title)} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                            <div className="block1-txt-child1 flex-col-l">
                                                <span className="block1-name ltext-102 trans-04 p-b-8">
                                                    {title}
                                                </span>
                                            </div>
                                            <div className="block1-txt-child2 p-b-4 trans-05">
                                                <div className="block1-link stext-101 cl0 trans-09">
                                                    Detalles
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="flex-c-m flex-w w-full p-t-45">
                            <a href="http://rafmex.com.mx/assets/catalogo_RAFMEX_2020.pdf" className="flex-c-m stext-101 cl5 size-103 blue_b bor1 hov-btn1 p-lr-15 btn_prods trans-04" target="_blank">
                                Catálogo Completo <i className="fa fa-file-pdf-o catalog_c"></i>
                            </a>

                            <a href="" className="flex-c-m stext-101 cl5 size-103 blue_b bor1 hov-btn1 p-lr-15 btn_prods btn_cat_b trans-04">
                                Catálogo <i className="fa fa-file-pdf-o catalog_c"></i>
                            </a>
                        </div>


                    </div>
                </div>
           
                ) || <Producto 
                        producto={product}
                    />
                }
           
            </div>
        </div>
    )
};
export default Productos;