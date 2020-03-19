import React, { useEffect, useState, Fragment } from 'react';
import {fetchApi} from '../fetchApi/fetchApi';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import ImageSlide01 from './../assets/img/slide-01.jpg';
import ImageSlide02 from './../assets/img/slide-02.jpg';
import ImageSlide03 from './../assets/img/slide-03.jpg';
import LogoRaf from './../assets/img/logo_raf.png';
import ImageBanner01 from './../assets/img/banner-01.jpg';
import ImageBanner02 from './../assets/img/banner-02.jpg';
import ImageBanner03 from './../assets/img/banner-03.jpg';
{/* <Jumbotron /> */}

const Main = () => {
	const [state, setState] = useState({
		items: []
	});
	useEffect(() => {
		fetchApi('items/category', 'GET')
			.then(response => {
				setState({ ...state, items: response });
			});
		}, [])
	const { items } = state;
  return (
	<div className="sec-banner bg0 p-t-80 p-b-50">
		<div className="container">
			<div className="row">

				{items.map((item, index) => {
					const {title, img_url} = item;
					const images = [ImageBanner01,ImageBanner02,ImageBanner03];
					return(
						<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto" key={title}>
							<div className="block1 wrap-pic-w">
								<img src={images[index]} alt="IMG-BANNER" />
		
								<a href="/saborizantes" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
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

				<div className="flex-c-m flex-w w-full p-t-45">
					<a href="/productos" className="flex-c-m stext-101 cl5 size-103 blue_b bor1 hov-btn1 p-lr-15 trans-04">
						NUESTROS PRODUCTOS
					</a>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Main;
