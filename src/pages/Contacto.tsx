import React, { useEffect, useState } from 'react';
import ImageB4 from '../assets/img/bg-04.jpg';
import {fetchApi} from '../fetchApi/fetchApi';

const Contacto = () => {
	const [state, setState] = useState({
		office_phone : '',
		office_mail : '',
		store_address : '',
		store_phone : '',
		store_mail : ''
	});
	useEffect(() => {
		fetchApi('contact', 'GET')
			.then(response => {
				setState({ ...state, ...response });
			});
	  }, [])
	const { office_phone, office_mail, store_address, store_phone, store_mail } = state;
    return (
		<div>
			<section className="bg0 p-t-104 p-b-116">
				<div className="container">
					<div className="flex-w flex-tr">
						<div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
							<form id="formhome" target="_self" name="formhome">
								<h4 className="mtext-105 cl2 txt-center p-b-30">
									Envíanos un Mensaje
								</h4>
								<div className="bor8 m-b-20 how-pos4-parent">
									
									<input type="text" id="nombrehome" name="nombrehome" className="form-control stext-111 cl2 plh3 size-116 p-l-22" placeholder="Nombre" />
								</div>

								<div className="bor8 m-b-20 how-pos4-parent">
									
									<input type="email" id="correohome" name="correohome" className="form-control stext-111 cl2 plh3 size-116 p-l-22" placeholder="Correo" />
								</div>

								<div className="bor8 m-b-20 how-pos4-parent">

									<input type="text" id="telefonohome" name="telefonohome" className="form-control stext-111 cl2 plh3 size-116 p-l-22" placeholder="Teléfono" />
								</div>

								<div className="bor8 m-b-30">

									<textarea id="mensajehome" name="mensajehome" cols={30} rows={7} className="form-control stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" placeholder="Mensaje"></textarea>
								</div>

							<input id="sendhome" type="submit" value="Enviar Mensaje" className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" />
							</form>
						</div>

						<div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">

							<div className="flex-w w-full p-b-42">
								<h5 className="title_contact">Oficina</h5>
							</div>


							<div className="flex-w w-full p-b-42">
								<span className="fs-18 cl5 txt-center size-211">
									<span className="lnr lnr-phone-handset"></span>
								</span>

								<div className="size-212 p-t-2">
									<span className="mtext-110 cl2">
										Teléfono
									</span>

									<p className="stext-115 cl1 size-213 p-t-18">
										<a href="tel:5553416767">{office_phone}</a>
									</p>
								</div>
							</div>

							<div className="flex-w w-full">
								<span className="fs-18 cl5 txt-center size-211">
									<span className="lnr lnr-envelope"></span>
								</span>

								<div className="size-212 p-t-2">
									<span className="mtext-110 cl2">
										Correo
									</span>

									<p className="stext-115 cl1 size-213 p-t-18">
										<a href="mailto: ventas@rafmex.com">{office_mail}</a>
									</p>
								</div>
							</div>

							<br/><br/>

							<hr/>

							<br/>

							<div className="flex-w w-full p-b-42">
								<h5 className="title_contact">Tienda</h5>
							</div>

							<div className="flex-w w-full p-b-42">
								<span className="fs-18 cl5 txt-center size-211">
									<span className="lnr lnr-map-marker"></span>
								</span>

								<div className="size-212 p-t-2">
									<span className="mtext-110 cl2">
										Dirección
									</span>

									<p className="stext-115 cl6 size-213 p-t-18">
										{store_address}
									</p>
								</div>
							</div>

							<div className="flex-w w-full p-b-42">
								<span className="fs-18 cl5 txt-center size-211">
									<span className="lnr lnr-phone-handset"></span>
								</span>

								<div className="size-212 p-t-2">
									<span className="mtext-110 cl2">
										Teléfonos
									</span>

									<p className="stext-115 cl1 size-213 p-t-18">
										<a href="tel:5553416767">{store_phone}</a>
									</p>
								</div>
							</div>

							<div className="flex-w w-full">
								<span className="fs-18 cl5 txt-center size-211">
									<span className="lnr lnr-envelope"></span>
								</span>

								<div className="size-212 p-t-2">
									<span className="mtext-110 cl2">
										Correo
									</span>

									<p className="stext-115 cl1 size-213 p-t-18">
										<a href="mailto:tienda@rafmex.com">{store_mail}</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>	
			<div className="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7838735005885!2d-99.15016058509346!3d19.421741986890382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff286412b7c3%3A0x3c2c9ce5e3077d74!2sRAFMEX%20S.A.%20DE%20C.V.!5e0!3m2!1ses-419!2smx!4v1576971681042!5m2!1ses-419!2smx" width="100%" height="350" style={{border:0}}/>
			</div>
		</div>
    )
};
export default Contacto;