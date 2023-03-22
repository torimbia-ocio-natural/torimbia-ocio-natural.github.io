import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
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
      <ul className="copyright">
        <li>&copy; AppSeed</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
