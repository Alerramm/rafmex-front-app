import React, { useEffect, useState } from 'react';
import {fetchApi} from '../fetchApi/fetchApi';
import About01 from '../assets/img/about-01.jpg';
import About02 from '../assets/img/about-02.jpg';

const Nosotros = (props: any) => {
	const [state, setState] = useState({
		info: []
	});
	useEffect(() => {
		fetchApi('identidad_empresa', 'GET')
			.then(response => {
				setState({ ...state, info: response });
			})
		},[]);
		
	const { info } = state;

    return(
        <section className="bg0 p-t-75 p-b-120">
		<div className="container">
			<div className="row p-b-148">
				<div className="col-md-7 col-lg-8">
					<div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
						<h3 className="mtext-111 cl2 p-b-16">
							Misión
						</h3>
						<p className="stext-113 cl6 p-b-26">
							{/* {info[0].value} */}
						</p>
						<h3 className="mtext-111 cl2 p-b-16">
							Visión
						</h3>

						<p className="stext-113 cl6 p-b-26">
							{/* {info[1].value} */}
						</p>

					</div>
				</div>

				<div className="col-11 col-md-5 col-lg-4 m-lr-auto">
					<div className="how-bor1 ">
						<div className="hov-img0">
							<img src={About01} alt="IMG" />
						</div>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="order-md-2 col-md-7 col-lg-8 p-b-30">
					<div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
						<h3 className="mtext-111 cl2 p-b-16">
							Valores
						</h3>

						<div className="stext-113 cl6 p-b-26 about_text">
							{/* {info[0].value} */}
						</div>

						<div className="bor16 p-l-29 p-b-9 m-t-22">
							<p className="stext-114 cl6 p-r-40 p-b-11">
								Somos socios de ANPROPAN y colaboradores de la CANAINPA.
							</p>

							<span className="stext-111 cl8">
								- RAFMEX
							</span>
						</div>
					</div>
				</div>

				<div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
					<div className="how-bor2">
						<div className="hov-img0">
							<img src={About02} alt="IMG" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
    )
};
export default Nosotros;