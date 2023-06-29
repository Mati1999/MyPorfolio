import React, { useState } from 'react';
import '../scss/Header.scss';
import MA from '../static/MA.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [menu, setmenu] = useState('menu');
    const [moveHeader, setMoveHeader] = useState('header-open');

    const openMenu = (e) => {
        menu === 'menu' ? setmenu('menu-open') : setmenu('menu');
        moveHeader === 'header' ? setMoveHeader('header-open') : setMoveHeader('header');
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        e.target.className === 'toTop' && scroll.scrollToTop();
    };
    return (
        <>
            <button className={menu} onClick={openMenu}>
                <span></span>
            </button>
            <header className={moveHeader}>
                <Link className='toTop logoContainer' smooth={true} data-aos='fade-down' data-aos-duration='300'>
                    <img className='toTop' src={MA} alt='' onClick={scrollToTop} />
                </Link>
                <ul className='navigation'>
                    <li data-aos='fade-down' data-aos-duration='400'>
                        <Link to='aboutMe' smooth={true}>
                            Sobre mi
                        </Link>
                    </li>
                    <li data-aos='fade-down' data-aos-duration='500'>
                        <Link to='experience' smooth={true}>
                            Experiencia
                        </Link>
                    </li>
                    <li data-aos='fade-down' data-aos-duration='600'>
                        <Link to='tech' smooth={true}>
                            Tech
                        </Link>
                    </li>
                    <li data-aos='fade-down' data-aos-duration='700'>
                        <Link to='projects' smooth={true}>
                            Proyectos
                        </Link>
                    </li>
                    <li data-aos='fade-down' data-aos-duration='800'>
                        <Link to='contact' smooth={true}>
                            Contacto
                        </Link>
                    </li>
                </ul>
                <div className='socialLinks'>
                    <a href='https://github.com/Mati1999' target='_blank' data-aos='fade-down' data-aos-duration='800'>
                        <ion-icon name='logo-github'></ion-icon>
                    </a>
                    <a href='https://www.instagram.com/matias_aguilera99/' target='_blank' data-aos='fade-down' data-aos-duration='900'>
                        <ion-icon name='logo-instagram'></ion-icon>
                    </a>
                    <a href='https://www.linkedin.com/in/matiasaguilera/' target='_blank' data-aos='fade-down' data-aos-duration='1000'>
                        <ion-icon name='logo-linkedin'></ion-icon>
                    </a>
                    <a href='https://twitter.com/mati_aguilera99' target='_blank' data-aos='fade-down' data-aos-duration='1100'>
                        <ion-icon name='logo-twitter'></ion-icon>
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
