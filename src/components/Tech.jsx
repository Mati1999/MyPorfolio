import React from 'react';
import '../scss/Tech.scss';

const Tech = () => {
    return (
        <div className='tech' id='Tech'>
            <h2>Tecnologías</h2>
            <div className='tech-col'>
                <div className='tech-column tech-column'>
                    <div className='tech-column--title'>
                        <h3>Full Stack Developer</h3>
                        <h5>¿Qué realizo con esto? Creo proyectos increíbles desde cero y convierto mis ideas en realidad.</h5>
                    </div>
                    <div className='tech-column--dev'>
                        <div className='tech-column--technologies'>
                            <h3>Front-End</h3>
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
                            <h3>Back-End</h3>
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
                            <h3>Dev tools</h3>
                            <div className='technologies'>
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
        </div>
    );
};

export default Tech;
