import React from 'react';
import '../scss/Projects.scss';
import pic from '../static/pic.png';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <h2>Projects</h2>
            <div className='projects-container '>
                <div className='project '>
                    <p className='project-info'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in quis ipsa fugiat facere! Odit, voluptatum neque? Reiciendis iste expedita eveniet neque nesciunt veritatis,
                        voluptates dolorem veniam dolores, error eaque.
                    </p>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project '>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                    <p className='project-info'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in quis ipsa fugiat facere! Odit, voluptatum neque? Reiciendis iste expedita eveniet neque nesciunt veritatis,
                        voluptates dolorem veniam dolores, error eaque.
                    </p>
                </div>
                <div className='project '>
                    <p className='project-info'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in quis ipsa fugiat facere! Odit, voluptatum neque? Reiciendis iste expedita eveniet neque nesciunt veritatis,
                        voluptates dolorem veniam dolores, error eaque.
                    </p>
                    <div className='project-content'>
                        <img src={pic} alt='' />
                        <div>
                            <a href=''>Live</a>
                            <a href=''>Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
