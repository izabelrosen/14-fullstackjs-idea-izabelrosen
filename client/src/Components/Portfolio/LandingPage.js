/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import Parallax from 'parallax-js';
import moon from './Pics/moon.png';
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
        <Header as='h2' icon textAlign='center'>
          <Header.Content>Izabel Rosen</Header.Content>
        </Header>
        <div id="scene">
          <div data-depth="0.2">My first Layer!</div>
          <div data-depth="0.6">My second Layer!</div>
          <img className="moon" data-depth="0.8" src={moon} alt="moon" />
        </div>
        <div className="landingPage__buttons">
          <Button id="rotateLeft" inverted onClick={() => this.myProjects()}>Projects</Button>
          <Button id="rotateRight" inverted onClick={() => this.aboutMe()}>About</Button>
        </div>
      </section>
    );
  }
}
