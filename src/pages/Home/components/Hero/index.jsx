import React from 'react';
import HeroCard from '../../../../components/Card/Hero/heroCard';
import restauranfood from '../../../../assets/restauranfood.jpg';

import './index.scss';

const namespace = 'app-hero';

const Hero = () => {
    return (
        <div className={namespace}>
          <section className={`${namespace}__section`}>
            <HeroCard />
            <img src={restauranfood} alt="food" />
          </section>
        </div>
    )
};

export default Hero;
