import React from 'react';
import '../scss/Tech.scss';

const Tech = () => {
    return (
        <div className='tech' id='Tech'>
            <div className='tech-block'>
                <div className='tech-column tech-column--left'>
                    <div className='tech-column--title'>
                        <h2>Frontend Developer</h2>
                        <h5>What do i do with this? Create amazing proyects from scratch, and transform my ideas into reality.</h5>
                    </div>
                    <div className='tech-column--dev'>
                        <div className='tech-column--technologies'>
                            <h2>Technologies</h2>
                            <div>
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                                <h5>Sass</h5>
                                <h5>Bootstrap</h5>
                                <h5>JavaScript</h5>
                                <h5>jQuery</h5>
                                <h5>React</h5>
                                <h5>Git</h5>
                                <h5>Firebase</h5>
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
                <div className='tech-column tech-column--right'>
                    <div className='tech-column--title'>
                        <h2>Mentor</h2>
                        <h5>I really love helping future developers earn new skills and learn new technologies.</h5>
                    </div>
                    <div className='tech-column--technologies'>
                        <h2>My experience</h2>
                        <div>
                            <h5>1+ year of experience teaching JavasCript</h5>
                            <h5>6 courses</h5>
                            <h5>240+ students</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tech;
