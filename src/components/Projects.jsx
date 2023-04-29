import React from 'react';
import '../scss/Projects.scss';
import animaBooks from '../static/animaBooks.gif';
import checkIn from '../static/checkIn.gif';
import portfolio from '../static/portfolio.gif';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <h2>Projects</h2>
            <div className='projects-container '>
                <div className='project '>
                    <p className='project-info' data-aos='fade-right' data-aos-duration='1000'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in quis ipsa fugiat facere! Odit, voluptatum neque? Reiciendis iste expedita eveniet neque nesciunt veritatis,
                        voluptates dolorem veniam dolores, error eaque.
                    </p>
                    <div className='project-content' data-aos='fade-left' data-aos-duration='1000'>
                        <img src={animaBooks} alt='' />
                        <div>
                            <a href='https://anima-books-gamma.vercel.app/'>Live</a>
                            <a href='https://github.com/Mati1999/AnimaBooks'>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project '>
                    <div className='project-content' data-aos='fade-right' data-aos-duration='1000'>
                        <img src={checkIn} alt='' />
                        <div>
                            <a href='https://check-in-js.vercel.app/'>Live</a>
                            <a href='https://github.com/Mati1999/CheckIn-JS'>Code</a>
                        </div>
                    </div>
                    <p className='project-info' data-aos='fade-left' data-aos-duration='1000'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in quis ipsa fugiat facere! Odit, voluptatum neque? Reiciendis iste expedita eveniet neque nesciunt veritatis,
                        voluptates dolorem veniam dolores, error eaque.
                    </p>
                </div>
                <div className='project '>
                    <p className='project-info' data-aos='fade-right' data-aos-duration='1000'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in quis ipsa fugiat facere! Odit, voluptatum neque? Reiciendis iste expedita eveniet neque nesciunt veritatis,
                        voluptates dolorem veniam dolores, error eaque.
                    </p>
                    <div className='project-content' data-aos='fade-left' data-aos-duration='1000'>
                        <img src={portfolio} alt='' />
                        <div>
                            <a href='https://my-porfolio-roan.vercel.app/'>Live</a>
                            <a href='https://github.com/Mati1999/MyPorfolio'>Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
