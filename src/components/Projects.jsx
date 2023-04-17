import React from 'react';
import '../scss/Projects.scss';
import pic from '../static/pic.png';

const Projects = () => {
    return (
        <div id='projects' className='projects container-fluid'>
            <h2>Projects</h2>
            <div className='projects-container row d-flex '>
                <div className='project col'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project col'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                {/* <div className='project col-lg-3'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project col-lg-3'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project col-lg-3'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project col-lg-3'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project col-lg-3'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project col-lg-3'>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;
