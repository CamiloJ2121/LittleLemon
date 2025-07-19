import React from "react";
import mockData from './mock'

import './index.scss';

const namespace = 'app-testimonials';

const Testimonials = () => {
    return(
        <section className={namespace}>
            <h2 className={`${namespace}__title`}>Testimonials</h2>
            <div className={`${namespace}__main`}>
            {mockData.map((item, index) => (
                <div className={`${namespace}__card`} key={index}>
                <h2>Rating: {item.rating}</h2>
                <div className={`${namespace}__profile`}>
                    <img src={item.photo} alt="profile" />
                    <span>{item.name}</span>
                </div>
                <p>{item.review}</p>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Testimonials;