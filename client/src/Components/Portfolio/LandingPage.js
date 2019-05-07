/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import Parallax from 'parallax-js';
import moon from './Pics/moon.png';
import mynamei from './Pics/mynamei.svg';
import mynamezab from './Pics/mynamezab.svg';
import mynameel from './Pics/mynameel.svg';
import './style.css';

export default class LandingPage extends Component {
  constructor() {
    super();
    this.myProjects = this.myProjects.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
    this.scene = this.scene.bind(this);
  }

  componentDidMount() {
    this.scene();
  }

  myProjects = () => {
    const projects = document.getElementById('projects');
    projects.scrollIntoView();
  };

  aboutMe = () => {
    const aboutMe = document.getElementById('aboutMe');
    aboutMe.scrollIntoView();
  }

  scene = () => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);
  };

  render() {
    return (
      <section id="landingPage">
        <button className="buttonProject" onClick ={() => this.myProjects()}>Projects</button>
        <button className="buttonaboutMe" onClick ={() => this.aboutMe()}>About</button>
        <div id="scene">
          <img className="moon" data-depth="0.8" src={moon} alt="moon" />
        </div>
        <div className="myName">
          <img className="myName_i" data-depth="0.8" src={mynamei} alt="myname_i" />
          <img className="myName_zab" data-depth="0.8" src={mynamezab} alt="myname_zab" />
          <img className="myName_el" data-depth="0.8" src={mynameel} alt="myname_el" />
        </div>
        <div className="landingPage__buttons">
          <Button id="rotateLeft" inverted onClick={() => this.myProjects()}>Projects</Button>
          <Button id="rotateRight" inverted onClick={() => this.aboutMe()}>About</Button>
        </div>
      </section>
    );
  }
}
