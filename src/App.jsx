import React from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Tech from './components/Tech';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Presentation />
                <AboutMe />
                <Tech />
            </main>
        </>
    );
};

export default App;
