import React from 'react';

import Layout from '../../components/Layout';
import Gallery from '../../components/Gallery'
import Scroll from '../../components/Scroll';

import img1 from '../../assets/images/lakes/lakes-1.jpg';
import img2 from '../../assets/images/lakes/lakes-2.jpg';
import img3 from '../../assets/images/lakes/lakes-3.jpg';
import img4 from '../../assets/images/lakes/lakes-4.jpg';
import img5 from '../../assets/images/lakes/lakes-5.jpg';
import img6 from '../../assets/images/lakes/lakes-6.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main" className="img-lakes">
      <header>
        <h2>Lagos De Covadonga</h2>
        <p>Subida al mitico puerto de "La vuelta"</p>
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
            Desde Corao y para calentar piernas atacaremos el mitico puerto de los
            lagos de covadonga, un autentico hito para cualquier aficionado a la bicicleta.
            Sin preocupaciones y con vehiculo de apoyo solo tendras que pedalear. Te
            ofreceremos un pequeño picnic en la cima mientras disfrutas de la sensación de haber
            subido a uno de los parajes mas hermosos del mundo de la bicicleta. Para finalizar
            disfrutando la espectacular bajada y vuelta al punto de encuentro.
          </p>
          <h3>Galería</h3>
          <Gallery images={[img1, img2, img3, img4, img5, img6]} />
          <h3>Descripción Técnica</h3>
          <p>
            Punto de encuentro y llegada:&nbsp;
            <a target="_blank" href="https://goo.gl/maps/JV2VyNaArJ8Rub296">
              <span style={{ color: "black" }} > <i className="icon solid fa-map-marker"></i></span>&nbsp;
              Corao
            </a>
            <br /><br /><br />
            <ul className="features">
              <li className="icon solid fa-route">
                <h3>Distancia</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    38km
                </span>
                </p>
              </li>
              <li className="icon solid fa-mountain">
                <h3>Desnivel</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    1234m
                </span>
                </p>
              </li>
              <li className="icon solid fa-layer-group">
                <h3>Dificultad</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    <sup>4</sup>&frasl;<sub>5</sub>
                  </span>
                </p>
              </li>
              <li className="icon solid fa-clock">
                <h3>Tiempo</h3>
                <p style={{ textAlign: "center", marginTop: "75px" }}>
                  <span style={{ fontSize: "100px", fontWeight: "600" }}>
                    6h00m
                </span>
                </p>
              </li>
            </ul>

          </p>

          <h3>Mapa</h3>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1b4zT_24nWew0_pwtAjBHWqgxxozHKU3n" title="Map Lakes" width="100%" height="480"></iframe>
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
                  <td>Precio Base. Incluye vehiculo de soporte, alquiler de bicicleta de aluminio y picnic</td>
                  <td>40€/pax</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>
                    * Todos los precios incluyen seguro de responsibilidad civil y accidentes <br />
                    ** Todos nuestros guias cuentan con la titulación requerida y amplia experiencia
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
