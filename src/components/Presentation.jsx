import React from 'react';
import profilePicture from '../static/ProfilePicture.jpg';
import '../scss/Presentation.scss';

const Presentation = () => {
    return (
        <section id='Presentation' className='presentation'>
            <div>
                <h1>Matias Aguilera</h1>
                <h2>Front-End developer & Mentor</h2>
            </div>
            <figure>
                <img src={profilePicture} alt='Profile' />
            </figure>
        </section>
    );
};

export default Presentation;
