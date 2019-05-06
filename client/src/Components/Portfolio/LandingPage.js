/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import './style.css';

export default class LandingPage extends Component {
  constructor() {
    super();
    this.myProjects = this.myProjects.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
  }

  myProjects = () => {
    const projects = document.getElementById('projects');
    projects.scrollIntoView();
  };

  aboutMe = () => {
    const aboutMe = document.getElementById('aboutMe');
    aboutMe.scrollIntoView();
  }

  render() {
    return (
      <section id="landingPage">
        <Header as='h2' icon textAlign='center'>
          <Header.Content>Izabel Rosen</Header.Content>
        </Header>
        <Button onClick={() => this.myProjects()}>Projects</Button>
        <Button onClick={() => this.aboutMe()}>About</Button>
      </section>
    );
  }
}
