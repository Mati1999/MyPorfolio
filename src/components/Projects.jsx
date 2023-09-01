import React from 'react';
import '../scss/Projects.scss';
import animaBooks from '../static/animaBooks.gif';
import checkIn from '../static/checkIn.gif';
import portfolio from '../static/portfolio.gif';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <h2>Proyectos</h2>
            <div className='projects-container '>
                <div className='project '>
                    <h3>Anima Books</h3>
                    <div className='project-infoContainer'>
                        <p className='project-info' data-aos='fade-up' data-aos-duration='1000' data-aos-offset='0'>
                            Sitio web E-commerce de Mangas.
                            <div>
                                <b>Funcionalidades:</b> Registro y LogIn, Perfil administrador para control de stock, historial de compras.
                            </div>
                            <div>
                                <b>Tecnologías:</b> HTML, CSS, Sass, Javascript, React y Firebase.
                            </div>
                        </p>
                        <div className='project-content' data-aos='fade-up' data-aos-duration='1000' data-aos-offset='0'>
                            <img src={animaBooks} alt='' />
                            <div className='projectLinksContainer'>
                                <h6>Admin User: admin@admin.com</h6>
                                <h6>Admin Password: admin1234</h6>
                                <div className='projectLinks'>
                                    <a href='https://anima-books-gamma.vercel.app/' target='_blank'>
                                        Live
                                    </a>
                                    <a href='https://github.com/Mati1999/AnimaBooks' target='_blank'>
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project '>
                    <h3>Check-In</h3>
                    <div className='project-reverse project-infoContainer'>
                        <div className='project-content' data-aos='fade-up' data-aos-duration='1000' data-aos-offset='0'>
                            <img src={checkIn} alt='' />
                            <div className='projectLinksContainer'>
                                <div className='projectLinks'>
                                    <a href='https://check-in-js.vercel.app/' target='_blank'>
                                        Live
                                    </a>
                                    <a href='https://github.com/Mati1999/CheckIn-JS' target='_blank'>
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className='project-info' data-aos='fade-up' data-aos-duration='1000' data-aos-offset='0'>
                            Sitio web E-commerce de Moda.
                            <div>
                                <b>Funcionalidades:</b> LogIn, compra de ropa.
                            </div>
                            <div>
                                <b>Tecnologías:</b> HTML, CSS, Sass, Javascript.
                            </div>
                        </p>
                    </div>
                </div>
                <div className='project '>
                    <h3>Personal Portfolio</h3>
                    <div className='project-infoContainer'>
                        <p className='project-info' data-aos='fade-up' data-aos-duration='1000' data-aos-offset='0'>
                            Portfolio personal.
                            <div>
                                <b>Funcionalidades:</b> Contratación 🤩.
                            </div>
                            <div>
                                <b>Tecnologías:</b> HTML, CSS, Sass, Javascript y React.
                            </div>
                        </p>
                        <div className='project-content' data-aos='fade-up' data-aos-duration='1000' data-aos-offset='0'>
                            <img src={portfolio} alt='' />
                            <div className='projectLinksContainer'>
                                <div className='projectLinks'>
                                    <a href='https://my-porfolio-portfolio-2022.vercel.app/' target='_blank'>
                                        Live
                                    </a>
                                    <a href='https://github.com/Mati1999/MyPorfolio' target='_blank'>
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
