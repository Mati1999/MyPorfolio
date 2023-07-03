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
                                    <li>Creación 4 sitios web.</li>
                                </ul>
                            </p>
                            <p>
                                <b>Tecnologías:</b>
                                <div>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                    </ul>
                                    <ul>
                                        <li>React</li>
                                        <li>Firebase</li>
                                        <li>NodeJS</li>
                                    </ul>
                                    <ul>
                                        <li>Express</li>
                                        <li>SQL</li>
                                        <li>MongoDb</li>
                                    </ul>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className='experience-box--content'>
                        <div className='info'>
                            <h3>
                                <b>Desarrollo de aplicaciones</b> / CoderHouse
                            </h3>
                            <span>Agosto 2021 - Octubre 2022</span>
                            <p>
                                <b>Actividades:</b>
                                <ul>
                                    <li>Resolución de desafíos.</li>
                                    <li>Creación de aplicación mobile.</li>
                                </ul>
                            </p>
                            <p>
                                <b>Tecnologías:</b>
                                <div>
                                    <ul>
                                        <li>React Native</li>
                                        <li>Redux</li>
                                    </ul>
                                    <ul>
                                        <li>Device Features: Cámara, Location.</li>
                                        <li>SQLite</li>
                                    </ul>
                                </div>
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
                            <span>Julio 2022 - Actualidad</span>
                            <p>
                                <b>Tareas:</b>
                                <ul>
                                    <li>Desarrollo CRM para clientes.</li>
                                    <li>
                                        Tecnologías:
                                        <ul>
                                            <li>Apex (Java).</li>
                                            <li>Lightning Web Component (Javascript/React).</li>
                                            <li>Omnistudio (Integraciones API, SQL).</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='experience-box--content'>
                        <div className='info'>
                            <h3>
                                <b>Tutor Javascript</b> / CoderHouse
                            </h3>
                            <span>Abril 2022 - Actualidad</span>
                            <p>
                                <b>Tareas:</b>
                                <ul>
                                    <li>Acompañamiento a los alumnos.</li>
                                    <li>Corrección de desafios y proyectos.</li>
                                    <li>Dictado de clases de consulta.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
