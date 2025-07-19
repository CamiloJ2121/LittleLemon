import React from "react";
import restaurant from '../../assets/restaurant.jpg';
import Navigation from "../Navigation/index";

import './index.scss';

const namespace = "app-footer";

const Footer = () => {
  return (
    <footer className={namespace}>
      <img src={restaurant} alt="restaurant" />
      <section>
        <h2 className={`${namespace}__title`}>Doormat Navigation</h2>
        <Navigation />
      </section>

      <section>
        <h2 className={`${namespace}__title`}>Contact</h2>
        <address>
          123 Main St<br/>
          (123) 456-7890<br/>
          email@example.com
        </address>
      </section>

      <section>
        <h2 className={`${namespace}__title`}>Social Media Links</h2>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer">X</a></li>
        </ul>
      </section>
  </footer>

)};

export default Footer;
