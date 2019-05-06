import React from 'react';
import '../../Components/App.css';
import LandingPage from '../../Components/Portfolio/LandingPage';
import Projects from '../../Components/Portfolio/Projects';
import About from '../../Components/Portfolio/About';

const Home = () => (
  <div className="home">
    <LandingPage />
    <Projects />
    <About />
  </div>
);
export default Home;
