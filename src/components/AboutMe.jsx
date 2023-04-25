import React from 'react';
import '../scss/AboutMe.scss';
import aboutMe from '../static/aboutMe2.svg';

const AboutMe = () => {
    return (
        <div className='AboutMeSection' id='aboutMe'>
            <img src={aboutMe} alt='' data-aos='zoom-in' />
            <h2 data-aos='zoom-out'>AboutMe</h2>
            <p data-aos='zoom-out'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus earum quasi, unde numquam nobis atque. Odit dignissimos quibusdam eaque unde repudiandae provident distinctio
                delectus nesciunt similique voluptate voluptas, ullam tempora!
            </p>
        </div>
    );
};

export default AboutMe;
