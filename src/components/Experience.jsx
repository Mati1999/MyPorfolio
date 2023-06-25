import React from 'react';
import '../scss/Experience.scss';

const Experience = () => {
    return (
        <div id='Experience' className='experience'>
            <h2>Experiencia</h2>
            <div className='experience-box'>
                <div className='experience-box--section'>
                    <h4>Estudios</h4>
                    <div className='experience-box--content'>
                        <div className='info'>
                            <h3>
                                <b>Full Stack Developer</b> / CoderHouse
                            </h3>
                            <span>Agosto 2021 - Octubre 2022</span>
                            <p>
                                <b>Actividades:</b>
                                <ul>
                                    <li>Resolución de desafíos.</li>
                                    <li>Creación de proyecto final.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='experience-box--section'>
                    <h4>Esperiencia laboral</h4>
                    <div className='experience-box--content'>
                        <div className='info'>
                            <h3>
                                <b>Salesforce Developer</b> / LabsXD
                            </h3>
                            <span>Julio 2022-Actualidad</span>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
