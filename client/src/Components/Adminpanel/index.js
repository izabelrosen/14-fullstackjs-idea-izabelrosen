/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import './style.css';

export default class AdminPanel extends Component {
  render() {
    return (
      <div className="adminpanel">
        <h1>admin</h1>

  <List>
    <List.Item>
      <List.Content>
        <List.Header>
          <h3 className="adminpanel__users">
            Users
          </h3></List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>
          <h3 className="adminpanel__messages">
            Messages
          </h3></List.Header>
      </List.Content>
    </List.Item>

  </List>
  </div>
    );
  }
}
