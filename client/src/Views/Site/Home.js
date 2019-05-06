import React from 'react';
import '../../Components/App.css';
import LandingPage from '../../Components/Portfolio/LandingPage';
import Projects from '../../Components/Portfolio/Projects';
import About from '../../Components/Portfolio/About';

const Home = () => (
    <div className="home">
      <section id="home__landinPage">
        <LandingPage />
      </section>
      <section id="home__projects">
        <Projects />
      </section>
      <section id="home__aboutMe">
        <About />
      </section>
    </div>
);
export default Home;
