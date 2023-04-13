import React from 'react';
import profilePicture from '../static/ProfilePicture.jpg';
import '../scss/Presentation.scss';

const Presentation = () => {
    return (
        <section id='Presentation'>
            <div>
                <h1>Hi! I'm Matias Aguilera</h1>
                <h2>Full Stack developer & Mentor</h2>
            </div>
            <figure>
                <img src={profilePicture} alt='Profile' />
            </figure>
        </section>
    );
};

export default Presentation;
