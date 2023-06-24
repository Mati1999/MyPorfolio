import React from 'react';
import '../scss/AboutMe.scss';
import aboutMe from '../static/aboutMe2.svg';

const AboutMe = () => {
    return (
        <div className='AboutMeSection' id='aboutMe'>
            <img src={aboutMe} alt='' data-aos='zoom-in' />
            <h2 data-aos='zoom-out'>Sobre mi</h2>
            <p data-aos='zoom-out'>
                Soy un apasionado desarrollador full stack con experiencia en la creación de sitios web <b>increíbles</b>. Tengo habilidades en tecnologías frontend como
                <b> HTML, CSS, JavaScript y React</b>, así como en el desarrollo de <b>APIs</b> y bases de datos con <b>Node.js, Express y MongoDB</b>. Soy un solucionador de problemas creativo y
                eficiente, siempre dispuesto a aprender y enfrentar nuevos desafíos. Estoy entusiasmado por contribuir al éxito de los proyectos, entregando productos de alta calidad a mis clientes y
                usuarios finales.
            </p>
        </div>
    );
};

export default AboutMe;
