import React from 'react';
import '../scss/Header.scss';
import MA from '../static/MA.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        e.target.className === 'toTop' && scroll.scrollToTop();
        e.target.className === 'toAboutMe' && scroll.scrollTo(700);
        e.target.className === 'toTech' && scroll.scrollTo(1600);
    };
    return (
        <header>
            <Link className='toTop' smooth={true}>
                <img className='toTop' src={MA} alt='' onClick={scrollToTop} />
            </Link>
            <ul>
                <li className='toAboutMe' onClick={scrollToTop}>
                    <Link className='toAboutMe' smooth={true} onClick={scrollToTop}>
                        About me
                    </Link>
                </li>
                <li className='toTech'>
                    <Link className='toTech' smooth={true} onClick={scrollToTop}>
                        Tech
                    </Link>
                </li>
                <li>
                    <Link className='' to='AboutMe' smooth={true}>
                        Proyects
                    </Link>
                </li>
                <li>
                    <Link className='' to='AboutMe' smooth={true}>
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
