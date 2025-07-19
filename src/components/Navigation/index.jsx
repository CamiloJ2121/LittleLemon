import React from 'react';
import { Link } from "react-router-dom";

import './index.scss';

const namespace = 'app-navegation';

const Navigation = () => {
    return(
        <nav className={namespace}>
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/About" className="nav-item">About</Link></li>
                <li><Link to="/Menu" className="nav-item">Menu</Link></li>
                <li><Link to="/Reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="/Order" className="nav-item">Order online</Link></li>
                <li><Link to="/Login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;

