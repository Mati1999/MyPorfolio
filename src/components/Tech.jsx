import React from 'react';
import '../scss/Tech.scss';

const Tech = () => {
    return (
        <div className='tech' id='Tech'>
            <h2>Tecnologías</h2>
            <div className='tech-col'>
                <div className='tech-column tech-column'>
                    <div className='tech-column--title'>
                        <h2>Full Stack Developer</h2>
                        <h5>¿Qué hago con esto? Crear proyectos increíbles desde cero y convertir mis ideas en realidad.</h5>
                    </div>
                    <div className='tech-column--dev'>
                        <div className='tech-column--technologies'>
                            <h2>Front-End</h2>
                            <div className='technologies'>
                                <div>
                                    <h5>HTML</h5>
                                    <h5>CSS</h5>
                                    <h5>Sass</h5>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div>
                                    <h5>JavaScript</h5>
                                    <h5>jQuery</h5>
                                    <h5>React</h5>
                                    <h5>Git</h5>
                                </div>
                            </div>
                        </div>
                        <div className='tech-column--technologies'>
                            <h2>Back-End</h2>
                            <div className='technologies'>
                                <div>
                                    <h5>NodeJS</h5>
                                    <h5>Express</h5>
                                    <h5>SQL</h5>
                                </div>
                                <div>
                                    <h5>MongoDB</h5>
                                    <h5>Firebase</h5>
                                </div>
                            </div>
                        </div>
                        <div className='tech-column--technologies'>
                            <h2>Dev tools</h2>
                            <div>
                                <h5>Figma</h5>
                                <h5>Github</h5>
                                <h5>Vercel</h5>
                                <h5>Gitbash</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tech;
