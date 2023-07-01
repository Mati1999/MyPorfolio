import React from 'react';
import '../scss/AboutMe.scss';
import aboutMe from '../static/aboutMe2.svg';

const AboutMe = () => {
    return (
        <div className='AboutMeSection' id='aboutMe'>
            <img src={aboutMe} alt='' data-aos='zoom-in' />
            <h2 data-aos='zoom-out'>Sobre mi</h2>
            <p>
                Soy un apasionado desarrollador full stack con experiencia en la creación de sitios web <b>increíbles</b>. Busco un puesto preferiblemente <b>REMOTO</b> y una empresa que contribuya a
                mi <b>formación y crecimiento</b> dentro de la misma, y así poder contribuir a la misma de la manera mas <b>efectiva</b>. Soy un solucionador de problemas <b>creativo y eficiente</b>,
                siempre dispuesto a aprender y enfrentar nuevos desafíos. Estoy entusiasmado por contribuir al éxito de los proyectos, entregando productos de alta calidad a los clientes.
            </p>
        </div>
    );
};

export default AboutMe;
