import React from 'react';

import Layout from '../../components/Layout';
import Gallery from '../../components/Gallery'
import Scroll from '../../components/Scroll';

import img1 from '../../assets/images/coast/coast-1.jpg';
import img2 from '../../assets/images/coast/coast-2.jpg';
import img3 from '../../assets/images/coast/coast-3.jpg';
import img4 from '../../assets/images/coast/coast-4.jpg';
import img5 from '../../assets/images/coast/coast-5.jpg';
import img6 from '../../assets/images/coast/coast-6.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main" className="img-coast">
      <header>
        <h2>Senda Costera</h2>
        <p>Pasa un día inolvidable en familia</p>
        <Scroll type="id" element="buy">
          <a href="#buy" className="more">
            Contacta
        </a>
        </Scroll>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Descripción</h3>
          <p>
            Ruta circular. Discurre entre playas, acantilados y pequeños pueblos,
            por una senda cicloturistica libre de tráfico y segura. Con pequeñas
            paradas interpretativas del paisaje. En el punto intermedio visitaremos&nbsp;
            un <b><a href="https://desidras.com/llagar/" target="_blank">llagar</a></b>&nbsp;
            tradicional para conocer el proceso de elaboración de la sidra
            y además degustaremos la gastronomia típica de estos lugares,&nbsp;
            <a href="https://es.wikipedia.org/wiki/Espicha" target="_blank"><b>la "Espicha"</b></a>,
            elaborada con productos locales. Volveremos por el trazado del camino de santiago
            disfrutando de la calma del entorno rural del oriente.
          </p>
          <h3>Galería</h3>
          <Gallery images={[img1, img2, img3, img4, img5, img6]}/>
          <h3>Descripción Técnica</h3>
          <p>
            Punto de encuentro y llegada:&nbsp;
            <a target="_blank" href="https://goo.gl/maps/vQMWg7nTLYrjrM8z8">
              <span style={{ color: "black" }} > <i className="icon solid fa-map-marker"></i></span>&nbsp;
              Aparcamiento de monasterio San Antolín de Bedón
            </a>
            <br /><br /><br />
            <ul className="features">
              <li className="icon solid fa-route">
                <h3>Distancia</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    17km
                </span>
                </p>
              </li>
              <li className="icon solid fa-mountain">
                <h3>Desnivel</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    300m
                </span>
                </p>
              </li>
              <li className="icon solid fa-layer-group">
                <h3>Dificultad</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    <sup>1</sup>&frasl;<sub>5</sub>
                  </span>
                </p>
              </li>
              <li className="icon solid fa-clock">
                <h3>Tiempo</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    5h30m
                </span>
                </p>
              </li>
            </ul>

          </p>

          <h3>Mapa</h3>
          <iframe src="https://www.google.com/maps/d/embed?mid=11EUoAbojrPObkpxNTWjIW-UFu-mQU2X5" title="Map Coast" width="100%" height="480"></iframe>

          <hr />

          <h3>Precios</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Descripción</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Precio Base. Incluye guia y espicha</td>
                  <td>22€/pax</td>
                </tr>
                <tr>
                  <td>Alquiler de bicicleta adulto.</td>
                  <td>+15€/pax</td>
                </tr>
                <tr>
                  <td>Alquiler de bicicleta niño.</td>
                  <td>+7€/pax</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>
                    * Todos los precios incluyen seguro de responsibilidad civil y accidentes. <br />
                    ** Todos nuestros guias cuentan con la titulación requerida y amplia experiencia. <br />
                    *** Consulte nuestros descuentos para grupos y niños.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <hr />
          <div id="buy">
            <h3>Contacta</h3>
            <p>
              Contacta con nosotros para comprobar disponibilidad en:
            </p>
            <ul>
              <li>
                <a href="tel:+34646812286">
                  <span className="label">+34 646 81 22 86</span>
                </a>
              </li>
              <li>
                <a href="mailto:info.torimbia.ocio.natural@gmail.com">
                  <span className="label">info.torimbia.ocio.natural@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
