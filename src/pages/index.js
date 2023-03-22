import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/coast.jpg';
import pic2 from '../assets/images/lakes.jpg';
import pic3 from '../assets/images/lakes/lakes-2.jpg';


const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>
          Torimbia Ocio Natural
        </h1>
        <p>
          Rutas en bicicleta por el oriente asturiano
        </p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Descubre mas
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Organiza tus vacaciones en bicicleta <br />
            con Torimbia Ocio Natural
          </h2>
          <p>
            En Torimbia Ocio Natural tenemos la experiencia de años para daros a ti y a tu familia las
            vacaciones perfectas.
            Dejalo todo en nuestras manos y embarcate en una experiencia inolvidable junto a la naturaleza.
          </p>
        </header>
        <Scroll type="id" element="two">
          <a href="#two" className="more">
            Descubre nuestros viajes
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Senda Costera
          </h2>
          <hr />
          <p>
            Ruta en familia para disfrutar de la costa y la gastronomia asturiana.<br />
            Con visita a llagar para conocer el proceso de elaboracion de la sidra.
          </p>
          <h3>
            <a href="/trips/coast" className="button small">Mas</a>
          </h3>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Lagos de Covadonga
          </h2>
          <hr />
          <p>
          Subida al mitico puerto de "La vuelta". <br />
          </p>
          <a href="/trips/lakes" className="button small">Mas</a><br/>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Descubre nuestros viajes
          </h2>
          <hr />
          <p>
            Descubre el resto de nuestros viajes y servicios en el oriente asturiano
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Nuestros viajes incluyen</h2>
          <p>
            En todos los viajes de Torimbia Ocio Natural se inluyen los siguiente servicios
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-bicycle">
            <h3>Bicicletas modernas</h3>
            <p>
              <br/>
              Contamos con una moderna flota de bicicletas hibridas y de carretera.
            </p>
          </li>
          <li className="icon solid fa-cog">
            <h3>Soporte</h3>
            <p>
              <br />
              Durante todo el recorrido contaras con la ayuda de nuestros guias y
              nuestro vehiculo de apoyo
            </p>
          </li>
          <li className="icon solid fa-tools">
            <h3>Kit de reparaciones</h3>
            <p>
              Para el alquiler libre contareis con un kit de reparaciones completo,
              casco y candado.
            </p>
          </li>
          <li className="icon solid fa-language">
            <h3>English friendly</h3>
            <p>
              <br/>
              Nuestros guias hablan ingles.
            </p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
