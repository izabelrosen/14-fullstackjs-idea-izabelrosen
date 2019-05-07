/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import Parallax from 'parallax-js';
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
        <Button onClick={() => this.myProjects()}>Projects</Button>
        <Button onClick={() => this.aboutMe()}>About</Button>
        <div id="scene">
          <div data-depth="0.2">My first Layer!</div>
          <div data-depth="0.6">My second Layer!</div>
        </div>
      </section>
    );
  }
}
