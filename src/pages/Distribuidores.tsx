import React, { useCallback, useEffect } from 'react';
import ImageB4 from '../assets/img/bg-03.jpg';
import PerfectScrollbar from 'perfect-scrollbar';
import Slider from "react-slick";
import DIS1 from '../assets/img/distribuidores/dis_1.jpg';
import DIS2 from '../assets/img/distribuidores/dis_2.jpg';
import DIS3 from '../assets/img/distribuidores/dis_3.jpg';
import DIS4 from '../assets/img/distribuidores/dis_4.jpg';
import DIS5 from '../assets/img/distribuidores/dis_5.jpg';
import DIS6 from '../assets/img/distribuidores/dis_6.jpg';
import DIS7 from '../assets/img/distribuidores/dis_7.jpg';
import DIS8 from '../assets/img/distribuidores/dis_8.jpg';
import DIS9 from '../assets/img/distribuidores/dis_9.jpg';
import DIS10 from '../assets/img/distribuidores/dis_10.jpg';
import DIS11 from '../assets/img/distribuidores/dis_11.jpg';
import DIS12 from '../assets/img/distribuidores/dis_12.jpg';
import DIS13 from '../assets/img/distribuidores/dis_13.jpg';
import DIS14 from '../assets/img/distribuidores/dis_14.jpg';
import DIS15 from '../assets/img/distribuidores/dis_15.jpg';
import DIS16 from '../assets/img/distribuidores/dis_16.jpg';
import DIS17 from '../assets/img/distribuidores/dis_17.jpg';
import DIS18 from '../assets/img/distribuidores/dis_18.jpg';
import DIS19 from '../assets/img/distribuidores/dis_19.jpg';
import DIS20 from '../assets/img/distribuidores/dis_20.jpg';
import DIS21 from '../assets/img/distribuidores/dis_21.jpg';
import DIS22 from '../assets/img/distribuidores/dis_22.jpg';
import DIS23 from '../assets/img/distribuidores/dis_23.jpg';
import DIS24 from '../assets/img/distribuidores/dis_24.jpg';
import DIS25 from '../assets/img/distribuidores/dis_25.jpg';
import DIS26 from '../assets/img/distribuidores/dis_26.jpg';
import DIS27 from '../assets/img/distribuidores/dis_27.jpg';
import DIS28 from '../assets/img/distribuidores/dis_28.jpg';
import DIS29 from '../assets/img/distribuidores/dis_29.jpg';
import DIS30 from '../assets/img/distribuidores/dis_30.jpg';
import DIS31 from '../assets/img/distribuidores/dis_31.jpg';
import DIS32 from '../assets/img/distribuidores/dis_32.jpg';

const states = ['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila','Colima','Ciudad de México','Durango','Estado de México','Guanajuato','Guerrero','Hidalgo','Jalisco','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'];

const Distribuidores = () => {
    useEffect(() =>{
        const ps = new PerfectScrollbar('.slick4', {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
          });
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
<div>

    <section className="sec-relate-product bg0 p-t-45 p-b-105 back_map">
        <div className="container">
        <div className="row">
            <div className="wrap-slick4">
                <div className="slick4 d-flex">

                <Slider {...settings}>
                    {states.map((item,index) => {
                        const valueMap = DIS1;   
                        return (                 
                            <div key={item} className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                                <div className="block2" style={{ width: '200px' }}>
                                    <div className="block2-pic hov-img0" style={{ maxWidth: '250px' }}>
                                        <img src={valueMap} alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Ver
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">

                                            <span className="stext-105 cl3 text_dist">
                                                {item}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
                    

                </div>
            </div>
        </div>
        </div>
    </section>

    <footer className="bg1 p-t-75 p-b-32">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
						Productos
					</h4>

                    <ul>
                        <li className="p-b-10">
                            <a href="saborizantes.html" className="stext-107 cl7 hov-cl1 trans-04">
								Saborizantes
							</a>
                        </li>
                        <li className="p-b-10">
                            <a href="colorantes.html" className="stext-107 cl7 hov-cl1 trans-04">
								Colorantes
							</a>
                        </li>

                        <li className="p-b-10">
                            <a href="materiasprimas.html" className="stext-107 cl7 hov-cl1 trans-04">
								Materias Primas
							</a>
                        </li>

                        <li className="p-b-10">
                            <a href="moldes.html" className="stext-107 cl7 hov-cl1 trans-04">
								Moldes
							</a>
                        </li>
                        <li className="p-b-10">
                            <a href="charolas.html" className="stext-107 cl7 hov-cl1 trans-04">
								Charolas
							</a>
                        </li>
                        <li className="p-b-10">
                            <a href="utensilios.html" className="stext-107 cl7 hov-cl1 trans-04">
								Utensilios
							</a>
                        </li>
                        <li className="p-b-10">
                            <a href="decoracion.html" className="stext-107 cl7 hov-cl1 trans-04">
								Decoración
							</a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
						Acerca
					</h4>

                    <ul>
                        <li className="p-b-10">
                            <a href="nosotros.html" className="stext-107 cl7 hov-cl1 trans-04">
								Nosotros
							</a>
                        </li>

                        <li className="p-b-10">
                            <a href="distribuidores.html" className="stext-107 cl7 hov-cl1 trans-04">
								Distribuidores 
							</a>
                        </li>

                        <li className="p-b-10">
                            <a href="novedades.html" className="stext-107 cl7 hov-cl1 trans-04">
								Novedades
							</a>
                        </li>

                        <li className="p-b-10">
                            <a href="contacto.html" className="stext-107 cl7 hov-cl1 trans-04">
								Contacto
							</a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
						CONTACTO
					</h4>

                    <p className="stext-107 cl7 size-201">
                        TEL. (55) 5341 6767 o 01 800 234 6767
                    </p>

                </div>

                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
						Redes Sociales
					</h4>
                    <div>
                        <a href="https://www.facebook.com/Rafmex1942/" target="_blank" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/rafmex1942/" target="_blank" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div>

                <p className="stext-107 cl6 txt-center">
                    RAFMEX S.A. DE C.V.
                    <br/>
                    <a href="http://rafmex.com.mx/assets/aviso.pdf" target="_blank">Aviso de Privacidad</a>
                </p>

            </div>
        </div>
    </footer>

    <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
			<i className="zmdi zmdi-chevron-up"></i>
		</span>
    </div>

    <div className="wrap-modal1 js-modal1 p-t-60 p-b-20 modal_distrib">
        <div className="overlay-modal1 js-hide-modal1"></div>

        <div className="container">
            <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                    <img src="img/icons/icon-close.png" alt="CLOSE" />
                </button>

                <div className="row">

                    <div className="col-lg-12 p-b-30">
                        <div className="p-l-25 p-r-30 p-lr-0-lg">
                            <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Aguascalientes
							</h4>

                            <span className="mtext-106 cl2">
								GRUPO SANTANDER DISTRIBUCION DE MATERIAS PRIMAS
							</span>

                            <p className="stext-102 cl3 p-t-10">
                                BLOCK B local 29 Central de Abastos 20280 Aguascalientes, Ags 01 449 971 1139 y 971 1778 / CEL. 44 9107 7966

                            </p>

                            <a href="mailto:grupo.santander1@hotmail.com">grupo.santander1@hotmail.com</a>

                            <br/>
                            <br/>

                            <span className="mtext-106 cl2">
							LA BALANZA DE ALTAMIRA
							</span>

                            <p className="stext-102 cl3 p-t-10">
                                PLATEROS Nº 114 Del Carmen 20050 Aguascalientes, Ags 01 449 145 6728
                            </p>

                            <a href="mailto:labalanzadealtamira@hotmail.com">labalanzadealtamira@hotmail.com</a>

                            <br/>
                            <br/>

                            <span className="mtext-106 cl2">
							COMERCIALIZADORA CASTHERR
							</span>

                            <p className="stext-102 cl3 p-t-10">
                                JOSEFA O. DE DOMINGUEZ Nº 651-A Barrio de la Salud 20240 Aguascalientes, Ags 01 449 994 0906
                            </p>

                            <a href="mailto:comercializadoracastherr@yahoo.com.mx">comercializadoracastherr@yahoo.com.mx</a>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

    <div className="wrap-modal1 js-modal2 p-t-60 p-b-20 modal_distrib">
        <div className="overlay-modal1 js-hide-modal2"></div>

        <div className="container">
            <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                <button className="how-pos3 hov3 trans-04 js-hide-modal2">
                    <img src="img/icons/icon-close.png" alt="CLOSE" />
                </button>

                <div className="row">

                    <div className="col-lg-12 p-b-30">
                        <div className="p-l-25 p-r-30 p-lr-0-lg">
                            <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Baja California
							</h4>

                            <span className="mtext-106 cl2">
								RAFMEX S.A. DE C.V.
							</span>

                            <p className="stext-102 cl3 p-t-10">
                                Aquí hay un lugar para contactarnos:
                                <br />
                                <br /> San Esteban No. 58, Col. Santo Tomás, C.P.02020, Azcapotzalco, CDMX TEL.: 55 53416767 y 01 800 234 6767

                            </p>
                            <a href="mailto:vts@rafmex.com">vts@rafmex.com</a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal3 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal3"></div>
    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal3">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>
            <div className="row">
                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Baja California Sur
							</h4>
                        <span className="mtext-106 cl2">
								RAFMEX S.A. DE C.V.
							</span>
                        <p className="stext-102 cl3 p-t-10">
                            Aquí hay un lugar para contactarnos:
                            <br />
                            <br /> San Esteban No. 58, Col. Santo Tomás, C.P.02020, Azcapotzalco, CDMX TEL.: 55 53416767 y 01 800 234 6767

                        </p>
                        <a href="mailto:vts@rafmex.com">vts@rafmex.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal4 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal4"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal4">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Campeche
							</h4>

                        <span className="mtext-106 cl2">
								RAFMEX S.A. DE C.V.
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            Aquí hay un lugar para contactarnos:
                            <br />
                            <br /> San Esteban No. 58, Col. Santo Tomás, C.P.02020, Azcapotzalco, CDMX TEL.:55 53416767 y 01 800 234 6767
                        </p>
                        <a href="mailto:vts@rafmex.com">vts@rafmex.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal5 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal5"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal5">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Chiapas
							</h4>

                        <span className="mtext-106 cl2">
								DIMAPSA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CARR. TUXTLA - BERRIOZABAL KM-12 S/N Ciudad Maya 29130 Berriozábal, Chis 01 961 656 1182

                        </p>
                        <a href="mailto:alisur08@prodigy.net.mx">alisur08@prodigy.net.mx</a>
                        <a href="www.dimapsa.com.mx">www.dimapsa.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								LA ALIANZA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. PERIFERICO PONIENTE NORTE Nº 31 De Mexicanos 29240 San Cristóbal de las Casas, Chis 01 96 7112 0829

                        </p>
                        <a href="mailto:alianza_comercializadora@hotmail.com">alianza_comercializadora@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MAPRISA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CARR. PANAMERICANA KM. 1168 Nº 5 P.B. Jardines del Carmen 29260 San Cristóbal de las Casas, Chis 01 967 678 1930

                        </p>
                        <a href="mailto:gerencia.compras.mayoreo@prosur.com.mx">gerencia.compras.mayoreo@prosur.com.mx</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal6 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal6"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal6">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Chihuahua
							</h4>

                        <span className="mtext-106 cl2">
								TODO PARA PANADERIA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            IGNACIO ALLENDE Nº 3 Centro SCT 31091 Chihuahua, Chih 01 614 420 1680

                        </p>
                        <a href="mailto:materias_primas@hotmail.com">materias_primas@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								PROVEEPAN
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            DELICIAS Nº 6541 Nuevo Hipódromo 32685 Juárez, Chih 01 656 664 7124 al 27
                        </p>
                        <a href="www.proveepan.com">www.proveepan.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal7 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal7"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal7">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Coahuila
							</h4>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS EL ARCA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            BLVD. LUIS ECHEVERRIA ALVAREZ Nº 686 Lourdes 25070 Saltillo, Coah 01 844 417 2244

                        </p>
                        <a href="mailto:tuliorangel@gmail.com">tuliorangel@gmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								PANIFICADORA IDEAL
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CIPRECES Nº 999 Torreón Jardín 27200 Torreón, Coah 01 871 731 8162

                        </p>
                        <a href="mailto:panificadoralaideal@yahoo.com.mx">panificadoralaideal@yahoo.com.mx</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal8 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal8"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal8">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Colima
							</h4>

                        <span className="mtext-106 cl2">
								RAFMEX S.A. DE C.V.
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            Aquí hay un lugar para contactarnos:
                            <br />
                            <br /> San Esteban No. 58, Col. Santo Tomás, C.P.02020, Azcapotzalco, CDMX TEL.: 55 53416767 y 01 800 234 6767

                        </p>
                        <a href="mailto:vts@rafmex.com">vts@rafmex.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal9 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal9"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal9">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Ciudad de México
							</h4>

                        <span className="mtext-106 cl2">
								CASA ZARATE
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            MESONES Nº 44 Centro (Area 8) 06080 Cuauhtemoc, CDMX 01 55 5709 5151
                        </p>
                        <a href="mailto:casa_zarate@prodigy.net.mx">casa_zarate@prodigy.net.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								FRARMEX
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CARUSO Nº 279 Vallejo 07870 Gustavo A. Madero, CDMX 01 55 5759 2120 Y 01 55 5759 2133

                        </p>
                        <a href="mailto:frivera@frarmex.com">frivera@frarmex.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								SIGLO XXI
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. EJE 5 SUR Nº 1300 Ejército de Agua Prieta 09578 Iztapalapa, CDMX 01 55 5773 7813

                        </p>
                        <a href="mailto:figuerpan@yahoo.com.mx">figuerpan@yahoo.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS JEAN.CARLO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            QUETZALCOATL Nº 62 Tlaxpana 11370 Miguel Hidalgo, CDMX CEL.55 3033 5212 / 55 1803 0452
                        </p>
                        <a href="mailto:j.carloss2012@hotmail.com">j.carloss2012@hotmail.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal10 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal10"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal10">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Durango
							</h4>

                        <span className="mtext-106 cl2">
								COMERCIAL IBHER
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            INDUSTRIAL Nº 506 J Guadalupe Rodríguez 34280 Durango, Dgo 01 618 812 0474

                        </p>
                        <a href="mailto:e_giovanka@hotmail.com">e_giovanka@hotmail.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal11 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal11"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal11">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Estado de México
							</h4>

                        <span className="mtext-106 cl2">
								COMERCIAL IBHER
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            INDUSTRIAL Nº 506 J Guadalupe Rodríguez 34280 Durango, Dgo 01 618 812 0474

                        </p>
                        <a href="mailto:e_giovanka@hotmail.com">e_giovanka@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								GAMA PRODUCTOS PARA PANIFICACION
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            VALLE DE VOLGA M. 507 L 925 Valle de Aragón 57100 Netzahualcóyotl, Méx 01 55 5120 2433
                        </p>
                        <a href="mailto:elomar007@hotmail.com">elomar007@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								EL RINCON
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            ENRIQUE CARNEADO Nº 801 Granjas 50120 Toluca, Méx 01 722 217 7742
                        </p>
                        <a href="mailto:aviosparapan_elrincon@hotmail.com">aviosparapan_elrincon@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								TODO PARA EL PANADERO Y PASTELERO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CENTRAL DE ABASTOS TULTITLAN BOD. 32 Nativitas 54900 Tultitlán, Méx 01 55 2451 3407
                        </p>
                        <a href="mailto:agarciasua70@hotmail.com">agarciasua70@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								COMERCIALIZADORA MOZIKI
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            VIVEROS DE TLALNEPANTLA Nº 39-A Real del Ocho 54080 Tlalnepantla, Méx 01 55 2593 2261 / 01 55 4444 6359
                        </p>
                        <a href="mailto:c_moziki@hotmail.com">c_moziki@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								DISTRIBUIDORA LOS TOKYS
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            JILOTEPEC Nº 362 Jesús García Corona 54030 Tlalnepantla, Méx 01 55 5565 3046
                        </p>
                        <a href="mailto:amartinez362@hotmail.com">amartinez362@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								DISTRIBUIDORA DE AZUCAR MENDOZA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            KM 4.5 CARR TOLUCA - NAUCALPAN NAVE M San Salvador 50200 Toluca, Méx 01 722 210 0104
                        </p>
                        <a href="mailto:cpsguz2014@hotmail.com">cpsguz2014@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								SANTA CECILIA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. JOSE LOPEZ PORTILLO Nº 425 LT.J El Balcón 50010 Toluca, Méx 01 722 210 0125 / 01 722 492 9045
                        </p>
                        <a href="mailto:marpizetha@terra.com">marpizetha@terra.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								PANCRECE
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            BLVD. IGNACIO ZARAGOZA MZ. 38 El Mirador 52915 Atizapán de Zaragoza, Méx 01 55 5820 7944
                        </p>
                        <a href="mailto:compras@pancrece.com">compras@pancrece.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								DIALPA SAN PABLO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            HACIENDA LA FLORESTA Nº 19 Jardines del Alba 54750 Cuautitlán Izcalli, Méx 01 55 5881 2294
                        </p>
                        <a href="mailto:compras@pancrece.com">compras@pancrece.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								PRODUCTOS DE CALIDAD LA REINA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. R-1 L-1 MZ.3 Faja de Oro 55490 Ecatepec, Méx 01 55 2232 6804
                        </p>
                        <a href="mailto:mungothobby@gmail.com">mungothobby@gmail.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal12 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal12"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal12">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Guanajuato
							</h4>

                        <span className="mtext-106 cl2">
								LA CONCHA LEON
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            BLVD. ANTONIO MADRAZO Nº 217-A Centro Bodeguero Las Trojes 37227 León, Gto 01 477 716 7681

                        </p>
                        <a href="mailto:ventasleon@laconcha.com.mx">ventasleon@laconcha.com.mx</a>
                        <a href="www.laconcha.com.mx">www.laconcha.com.mx</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal13 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal13"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal13">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Guerrero
							</h4>

                        <span className="mtext-106 cl2">
								BALCORY
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            EMILIANO ZAPATA Nº 23 Alta Cuauhtémoc 39550 Acapulco, Gro CEL. 74 4430 5149

                        </p>
                        <a href="mailto:balcory.ventas@gmail.com">balcory.ventas@gmail.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal14 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal14"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal14">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Hidalgo
							</h4>

                        <span className="mtext-106 cl2">
								ESPIGA DE ORO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CALLE 21 DE MARZO NORTE Nº 1200 Vicente Guerrero 43630 Tulancingo, Hgo 01 775 754 3743

                        </p>
                        <a href="mailto:espigadeoro17@yahoo.com.mx">espigadeoro17@yahoo.com.mx</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal15 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal15"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal15">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Jalisco
							</h4>

                        <span className="mtext-106 cl2">
								ALMACENES DE DROGAS LA PAZ
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. ESPAÑA Nº 1792-A Moderna 44190 Guadalajara, Jal 01 33 3812 4444

                        </p>
                        <a href="mailto:almacendedrogas@prodigy.net.mx">almacendedrogas@prodigy.net.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								LA CONCHA GUADALAJARA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. DEL BOSQUE Nº 1189 Felipe Ángeles 45590 San Pedro Tlaquepaque, Jal 01 477 716 7681
                        </p>
                        <a href="www.laconcha.com.mx">www.laconcha.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								PRODUCTOS Y ACCESORIOS PARA REPOSTERIA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            ALDANACA N° 226 Versalles 48310 Puerto Vallarta, Jal 01 322 224 7739
                        </p>
                        <a href="mailto:reposteria.saborami@gmail.com">reposteria.saborami@gmail.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal16 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal16"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal16">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Michoacán
							</h4>

                        <span className="mtext-106 cl2">
								LA FRONTERA<br/>
								MATERIAS PRIMAS Y EQUIPOS<br/>
								PARA LA INDUSTRIA DE ALIMENTOS
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            ABASOLO Nº 727 CENTRO HISTÓRICO 58000 Morelia, Mich 01 443 317 8445

                        </p>
                        <a href="mailto:lafrontera.ventas@gmail.com">lafrontera.ventas@gmail.com</a>
                        <a href="www.lafrontera.mx">www.lafrontera.mx</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal17 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal17"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal17">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Morelos
							</h4>

                        <span className="mtext-106 cl2">
								RAFMEX S.A. DE C.V.
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            Aquí hay un lugar para contactarnos:
                            <br />
                            <br /> San Esteban No. 58, Col. Santo Tomás, C.P.02020, Azcapotzalco, CDMX TEL.: 55 53416767 y 01 800 234 6767

                        </p>
                        <a href="mailto:vts@rafmex.com">vts@rafmex.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal18 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal18"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal18">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Nayarit
							</h4>

                        <span className="mtext-106 cl2">
								RAFMEX S.A. DE C.V.
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            Aquí hay un lugar para contactarnos:
                            <br />
                            <br /> San Esteban No. 58, Col. Santo Tomás, C.P.02020, Azcapotzalco, CDMX TEL.: 55 53416767 y 01 800 234 6767

                        </p>
                        <a href="mailto:vts@rafmex.com">vts@rafmex.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal19 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal19"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal19">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Nuevo León
							</h4>

                        <span className="mtext-106 cl2">
								FILTROS Y ACCESORIOS
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            PASEO DE LOS LEONES Nº 156 Mitras Centro 64460 Monterrey, NL 01 81 8333 4760

                        </p>
                        <a href="mailto:filtrosyaccesoriosmty@gmail.com">filtrosyaccesoriosmty@gmail.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal20 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal20"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal20">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Oaxaca
							</h4>

                        <span className="mtext-106 cl2">
								PASTHINGEL
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            MODULO E ZONA ORIENTE LOC 72 Centro 68000 Oaxaca, Oax 01 951 516 7777

                        </p>
                        <a href="mailto:edgarivonne321@hotmail.com">edgarivonne321@hotmail.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal21 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal21"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal21">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Puebla
							</h4>

                        <span className="mtext-106 cl2">
								CIRSA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. DEL CONDE Nº 8 Central de Abastos 72019 Puebla, Pue 01 222 288 0341

                        </p>
                        <a href="mailto:ventasleon@laconcha.com.mx">cfd@cyrsamx.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								EL CISNE DE PUEBLA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            3 NORTE Nº 609 Centro 72000 Puebla, Pue 01 22 2232 5669

                        </p>
                        <a href="mailto:elcisnedepuebla_sadecv@yahoo.com.mx">elcisnedepuebla_sadecv@yahoo.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								ALIMENTOS Y AVIOS ZUANEI
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            1A CIRCUITO INTERIOR NORTE NAVE F Central de Abastos 72019 Puebla, Pue 01 22 2288 6657

                        </p>
                        <a href="mailto:zuaneiventas@yahoo.com">zuaneiventas@yahoo.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								ABARROTES MARSA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            PRIVADA HIDALGO Nº 2 Teziutlán Centro 73800 Teziutlán, Pue 01 23 1313 1511

                        </p>
                        <a href="mailto:marsa_614@hotmail.com">marsa_614@hotmail.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal22 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal22"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal22">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Querétaro
							</h4>

                        <span className="mtext-106 cl2">
								EL SURTIDOR
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            ISLAS ALEUTIANAS Nº 190 Bella Vista 76087 Querétaro, Qro 01 442 222 7711

                        </p>
                        <a href="mailto:elsurtidor_compras@yahoo.com.mx">elsurtidor_compras@yahoo.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MPPD
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            NAVE A LOCAL 18 Plazas del Sol 76099 Querétaro, Qro 01 442 212 7265

                        </p>
                        <a href="mailto:yadira@materiasprimas.com">yadira@materiasprimas.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal23 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal23"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal23">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Quintana Roo
							</h4>

                        <span className="mtext-106 cl2">
								PURA CEPA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            ACCESO MZA 61 LT 61 BOD. 22 Supermanzana 299 77560 Benito Juárez, QRoo 01 998 886 2952 /CEL. 99 8222 8443

                        </p>
                        <a href="mailto:somarpech@hotmail.com">somarpech@hotmail.com</a>
                        <a href="mailto:recepcion@pcie.com.mx">recepcion@pcie.com.mx</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal24 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal24"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal24">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								San Luis Potosi
							</h4>

                        <span className="mtext-106 cl2">
								PEALPAN
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CORDILLERA HIMALAYA Nº 640 Lomas 4a Secc 78210 San Luis Potosí, SLP 01 444 825 6884

                        </p>
                        <a href="mailto:ventas@pealpan.com.mx">ventas@pealpan.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								PROPACK MEXICANA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            JARDIN ZACATECAS Nº 27 Cerrada de Roma 78433 Soledad de Graciano Sánchez, SLP 01 444 854 5566

                        </p>
                        <a href="mailto:propackmexicana@hotmail.com">propackmexicana@hotmail.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal25 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal25"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal25">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Sinaloa
							</h4>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS DEL PACIFICO HIDALGO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            Nº 120 OTE. Primer Cuadro (Centro) 81200 Ahome, Sin 01 66 8818 1272

                        </p>
                        <a href="mailto:mppcomprasmochis@hotmail.com">mppcomprasmochis@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								CHANTILLY CULIACAN
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            RAFAEL BUELNA Nº 28 Centro 80000 Culiacán, Sin 01 667 713 1320

                        </p>
                        <a href="mailto:chantilly_mzt@hotmail.com">chantilly_mzt@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS DEL PACIFICO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CUAUHTEMOC Nº 288 Centro 81000 Guasave, Sin 01 668 818 1272

                        </p>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								CHANTILLY MAZATLAN
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            EJERCITO MEXICANO Nº 2004 Insurgentes 82018 Mazatlán, Sin 01 669 986 6111

                        </p>
                        <a href="mailto:chantilly_mzt@hotmail.com">chantilly_mzt@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS DEL PACIFICO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            JAVIER MINA Nº 327 Zona Centro 81400 Salvador Alvarado, Sin 01 66 8818 1272

                        </p>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal26 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal26"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal26">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Sonora
							</h4>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS DEL PACIFICO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            IGNACIO ZARAGOZA Nº 304 Urbanizable 3 85000 Cajeme, Son 01 668 818 1272

                        </p>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS DEL PACIFICO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            BLVD. SOLIDARIDAD Nº 605-6 Santa Isabel 83130 Hermosillo, Son 01 668 818 1272

                        </p>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS DEL PACIFICO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. IGNACIO LOPEZ RAYON Nº 204 Álamo 85830 Navojoa, Son 01 668 818 1272
                        </p>

                        <br/>
                        <br/>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal27 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal27"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal27">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Tabasco
							</h4>

                        <span className="mtext-106 cl2">
								DULCE FANTASIA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            FRANCISCO JAVIER MINA S/N Portal Del Agua 86000 Villahermosa, Tab 01 993 314 1035

                        </p>
                        <a href="mailto:correodulcefantasia@hotmail.com">correodulcefantasia@hotmail.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal28 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal28"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal28">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Tamaulipas
							</h4>

                        <span className="mtext-106 cl2">
								PROVEEDORA DEL PASTELERO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            ALTAMIRA Nº 1204 OTE Tampico Centro 89000 Tampico, Tams 01 833 214 1044

                        </p>
                        <a href="mailto:provpast@prodigy.net.mx">provpast@prodigy.net.mx</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal29 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal29"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal29">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Tlaxcala
							</h4>

                        <span className="mtext-106 cl2">
								LA CASA DEL PANADERO CALPE
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            IGNACIO PICASO SUR Nº 406 Centro 90800 Santa Ana Chiautempan, Tlax 01 24 645 82180

                        </p>
                        <a href="mailto:calpe@cyrsamx.com">calpe@cyrsamx.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal30 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal30"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal30">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Veracruz
							</h4>

                        <span className="mtext-106 cl2">
								DIALPA SAN PABLO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            ADOLFO LOPEZ MATEOS Nº 5 Rafael Lucio 91315 Rafael Lucio, Ver 01 228 811 1282
                        </p>
                        <a href="mailto:dialpa_laz@yahoo.com.mx">dialpa_laz@yahoo.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								CEPASA
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            PENSADOR MEXICANO (ESQ. ALFA Y OMEGA) S/N Miguel Ángel de Quevedo 91860 Veracruz, Ver 01 22 3397 4710 / 01 22 9934 8690
                        </p>
                        <a href="mailto:cepasacfds@hotmail.com">cepasacfds@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								LA CASA DEL PASTELERO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            URSULO GALVAN Nº 321- B Centro 91700 Veracruz, Ver 01 22 8818 5271
                        </p>
                        <a href="mailto:cherry@live.com.mx">cherry@live.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								SURTIPAN
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV.CUAUHTEMOC Nº 50 21 de Marzo 91010 Xalapa, Ver 01 22 8318 6386
                        </p>
                        <a href="mailto:surtipanxalapa@gmail.com">surtipanxalapa@gmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								MATERIAS PRIMAS CAPRICHO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            POETA JESUS DIAZ Nº 4 BIS Centro 91000 Xalapa, Ver 01 22 8818 2018
                        </p>
                        <a href="mailto:caprichospasteleros@hotmail.com">caprichospasteleros@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								DISTRIBUIDORA SAN MARCOS
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CALLE 8 Nº 102 Fortín de las Flores Centro 94470 Fortín de las Flores, Ver 01 271 405 7537
                        </p>
                        <a href="mailto:m-mendez17@hotmail.com">m-mendez17@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								PASTELERO.COM
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            AV. ORIENTE 20 Nº 1 Orizaba Centro 94300 Orizaba, Ver 01 272 106 9077
                        </p>
                        <a href="mailto:pastelero.com@hotmail.com">pastelero.com@hotmail.com</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal31 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal31"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal31">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Yucatán
							</h4>

                        <span className="mtext-106 cl2">
								COMEPAN DEL SURESTE
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CALLE 69 por 78 y 80 Nº 590-A Centro 97000 Mérida, Yuc 01 999 148 6439

                        </p>
                        <a href="mailto:gaby@comepan.com">gaby@comepan.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								CASA SANTOS LUGO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            TABLAJE 31247 ANILLO PERIFERICO KM. 46.1 Polígono Tixcacal 97300 Mérida, Yuc 01 999 341 0306

                        </p>
                        <a href="www.santoslugo.com.mx">www.santoslugo.com.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								LA CASA DEL REPOSTERO
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CALLE 72 Nº 419 Jardines de San Sebastián 97000 Mérida, Yuc 01 999 925 2761

                        </p>
                        <a href="mailto:casarepocont@prodigy.net.mx">casarepocont@prodigy.net.mx</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								BR DISTRIBUCIONES
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CALLE 11 Nº 332 Santa Gertrudis 97300 Mérida, Yuc 01 999 941 8434 / 35

                        </p>
                        <a href="mailto:acc_bastarrachea@hotmail.com">acc_bastarrachea@hotmail.com</a>

                        <br/>
                        <br/>

                        <span className="mtext-106 cl2">
								SUPER SAN VALENTIN
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            CALLE 51 (ENTRE 50 Y 52) Nº 204 Tekax de Álvaro Obregón 97970 Tekax,.Yuc 01 997 974 0937

                        </p>
                        <a href="mailto:sanvalentin_68@hotmail.com">sanvalentin_68@hotmail.com</a>

                        <br/>
                        <br/>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<div className="wrap-modal1 js-modal32 p-t-60 p-b-20 modal_distrib">
    <div className="overlay-modal1 js-hide-modal32"></div>

    <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal32">
                <img src="img/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">

                <div className="col-lg-12 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Zacatecas
							</h4>

                        <span className="mtext-106 cl2">
								PRODUCTOS TO-PAN
							</span>

                        <p className="stext-102 cl3 p-t-10">
                            PROL. ESMERALDA Nº 61-B CTM Magisterial 99320 Jerez,.Zac 01 494 945 1190

                        </p>
                        <a href="mailto:topan2prod@hotmail.com">topan2prod@hotmail.com</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
</div>
    )
};
export default Distribuidores;