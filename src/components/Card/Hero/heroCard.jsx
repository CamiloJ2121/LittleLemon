import React from "react";
import classNames from 'classnames';
import { Link } from "react-router-dom";

import './heroCard.scss'

const namespace = 'app-hero-card';

const mockDescription = 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'

const HeroCard = ({ title = 'LITTLE LEMON' , subtitle = 'Chicago' , description = mockDescription, btnTitle=' Reserve Table' }) => {
  return (
    <div className={namespace}>
        <h2 className={classNames(`${namespace}__title`)}>{title}</h2>
        <h3 className={classNames(`${namespace}__subTitle`)}>{subtitle}</h3>
        <p className={classNames(`${namespace}__description`)}>
          {description}
        </p>
        <button className={classNames(`${namespace}__btn`)}><Link to="/Reservations" className="nav-item">Reservations</Link></button>
    </div>
  );
};

export default HeroCard;
