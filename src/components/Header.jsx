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
        </header>
    );
};

export default Header;
