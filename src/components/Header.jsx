import React from 'react';
import '../scss/Header.scss';
import MA from '../static/MA.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <Link className='' to='Presentation' smooth={true}>
                <img src={MA} alt='' />
            </Link>
            <ul>
                <li>
                    <Link className='' to='AboutMe' offset={50} smooth={true}>
                        About me
                    </Link>
                </li>
                <li>
                    <Link className='' to='Tech' offset={-250} smooth={true}>
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
