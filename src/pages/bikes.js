import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll';

import img1 from '../assets/images/lakes/lakes-1.jpg';
import img4 from '../assets/images/lakes/lakes-4.jpg';
import img11 from '../assets/images/coast/coast-5.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main" className="img-lakes">
      <header>
        <h2>Nuestras bicicletas</h2>
        <p>Conoce nuestra flota</p>
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
            Nuestra cuidada flota cubrirá las diferentes necesidades para cada tipo de ciclismo.
          </p>

          <h3>Galería</h3>
          <Gallery images={[img1,img4, img11]} />

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
                  <td>Bicicleta hibridas 29'. Modelo: BH Spike</td>
                  <td>20€/pax</td>
                </tr>
                <tr>
                  <td>Bicleta de carretera de Alumio. Modelo: Giant Advanced One</td>
                  <td>30€/pax</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>
                    * Todos los precios incluyen seguro de responsibilidad civil y accidentes.
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
