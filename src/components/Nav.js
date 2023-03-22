import React, { useState } from 'react';
import { Link } from 'gatsby';
import Collapsible from './Collapsible'
import config from '../../config';


export default function Nav({ onMenuToggle = () => { } }) {
  const [tripsOpened, setTripsOpened] = useState(false)

  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Collapsible title="Rutas">
                  <ul style={{marginLeft: "1em"}}>
                    {config.trips.map(({ title, path }) =>
                      <li key="path">
                        <Link to={path}>{title}</Link>
                      </li>
                    )}
                  </ul>
                </Collapsible>
              </li>
              <li>
                <Link to="/bikes">Bicicletas</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
