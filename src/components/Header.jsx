import React from 'react';
import '../scss/Header.scss';
import MA from '../static/MA.png';

const Header = () => {
    return (
        <header>
            <img src={MA} alt='' />
            <ul>
                <li>
                    <a href=''>Presentation</a>
                </li>
                <li>
                    <a href=''>Tech</a>
                </li>
                <li>
                    <a href=''>Proyects</a>
                </li>
                <li>
                    <a href=''>Contact</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
