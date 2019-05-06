/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './style.css';

export default class LandingPage extends Component {
  render() {
    return (
      <section id="landingPage">
        <Header as='h2' icon textAlign='center'>
          <Header.Content>Izabel Rosen</Header.Content>
        </Header>
      </section>
    );
  }
}
