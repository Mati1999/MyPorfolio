import React from 'react';
import profilePicture from '../static/ProfilePicture.jpg';
import '../scss/Presentation.scss';

const Presentation = () => {
    return (
        <section id='Presentation' className='presentation'>
            <div>
                <h1 data-aos='fade-right' data-aos-duration='1500'>
                    Matias Aguilera
                </h1>
                <h2 data-aos='fade-right' data-aos-duration='1500'>
                    Front-End developer & Mentor
                </h2>
            </div>
            <figure>
                <img src={profilePicture} alt='Profile' data-aos='fade-left' data-aos-duration='1500' />
            </figure>
        </section>
    );
};

export default Presentation;
