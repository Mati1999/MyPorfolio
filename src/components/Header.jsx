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
            <Link className='toTop logoContainer' smooth={true}>
                <img className='toTop' src={MA} alt='' onClick={scrollToTop} />
            </Link>
            <ul className='navigation'>
                <li>
                    <Link to='aboutMe' smooth={true}>
                        About me
                    </Link>
                </li>
                <li>
                    <Link to='tech' smooth={true}>
                        Tech
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='socialLinks'>
                <a href='https://github.com/Mati1999' target='_blank'>
                    <ion-icon name='logo-github'></ion-icon>
                </a>
                <a href='https://www.instagram.com/matias_aguilera99/' target='_blank'>
                    <ion-icon name='logo-instagram'></ion-icon>
                </a>
                <a href='https://www.linkedin.com/in/matiasaguilera/' target='_blank'>
                    <ion-icon name='logo-linkedin'></ion-icon>
                </a>
                <a href='https://twitter.com/mati_aguilera99' target='_blank'>
                    <ion-icon name='logo-twitter'></ion-icon>
                </a>
            </div>
        </header>
    );
};

export default Header;
