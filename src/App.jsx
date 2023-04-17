import React from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Presentation />
                <AboutMe />
                <Tech />
                <Projects />
                <Contact />
            </main>
        </>
    );
};

export default App;
