import React from 'react';
import Navigation from '../Navigation/index';
import Logo from '../../assets/Logo.svg';

import './index.scss';

const namespace = 'app-header';

const Header = () => {
    return(
        <header className={namespace}>
            <img src={Logo} alt="Logo" />
            <Navigation />
        </header>
    );
};

export default Header;