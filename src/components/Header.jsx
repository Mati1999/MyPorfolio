import React from 'react';
import '../scss/Header.scss';
import MA from '../static/MA.png';

import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        e.target.className === 'toTop' && scroll.scrollToTop();
    };
    return (
        <header>
            <Link className='toTop' smooth={true}>
                <img className='toTop' src={MA} alt='' onClick={scrollToTop} />
            </Link>
            <div className='socialLinks'>
                <a href='https://github.com/Mati1999' Target='_blank'>
                    <ion-icon name='logo-github'></ion-icon>
                </a>
                <a href='https://www.instagram.com/matias_aguilera99/' Target='_blank'>
                    <ion-icon name='logo-instagram'></ion-icon>
                </a>
                <a href='https://www.linkedin.com/in/matiasaguilera/' Target='_blank'>
                    <ion-icon name='logo-linkedin'></ion-icon>
                </a>
                <a href='https://twitter.com/mati_aguilera99' Target='_blank'>
                    <ion-icon name='logo-twitter'></ion-icon>
                </a>
            </div>
        </header>
    );
};

export default Header;
