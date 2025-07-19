import React from 'react';
import HeroCard from '../../../../components/Card/Hero/heroCard';
import restauranfood1 from '../../../../assets/mario-adrian1.jpg';
import restauranfood2 from '../../../../assets/mario-adrian2.jpg';

import './index.scss'

const namespace = 'app-about';

const About = () => {
    return(<section className={namespace}>
       <HeroCard className={namespace}/>
        <img src={restauranfood1} className={`${namespace}__image1`} alt="food1"  />
        <img src={restauranfood2} className={`${namespace}__image2`} alt="food2"  />
    </section>)
};

export default About;
