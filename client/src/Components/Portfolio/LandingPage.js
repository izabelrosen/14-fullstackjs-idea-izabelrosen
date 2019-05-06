/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Header.Content>Izabel Rosen</Header.Content>
        </Header>
      </div>
    );
  }
}
