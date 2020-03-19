import React, { useEffect, useState } from 'react';
import {fetchApi} from '../fetchApi/fetchApi';
import Img1 from '../assets/img/banner_nov_01.jpg';
import Img2 from '../assets/img/banner_nov_02.jpg';

const Novedades = () => {
    const [state, setState] = useState({
		items: []
	});
	useEffect(() => {
		fetchApi('items/news', 'GET')
			.then(response => {
				setState({ ...state, items: response });
			});
        }, []);
    const { items } = state;
    const imgs = [Img1, Img2];
    return(
        <div className="sec-banner bg0 p-t-80 p-b-50">
            <div className="container">
                <div className="row">

                    {items.map((item, index) => {
                        const {title, img_url} = item;
                        return(
                            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto" key={title}>
                                <div className="block1 wrap-pic-w">
                                    {/* <img src={img_url} alt="IMG-BANNER" /> */}
                                    <img src={imgs[index]} alt="IMG-BANNER" />
                                    <a href="novedades_productos.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
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
                                    </a>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
};
export default Novedades;