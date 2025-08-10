import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

const App = () => {
    return (
        <div className="app">
            <Header />
            <AboutSection />
            <ExperienceSection />
            <PortfolioSection />
            <ContactSection />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));