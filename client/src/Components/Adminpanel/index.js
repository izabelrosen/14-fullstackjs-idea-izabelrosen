/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App';
import { connect } from 'react-redux';
import {
  Button, Icon, Menu, Table,
} from 'semantic-ui-react';
import { fetchUsers } from '../../Actions/user';
import './style.css';

class AdminPanel extends Component {
  componentWillMount = () => {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="adminpanel">
        <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      { this.props.users.map(user => (
        <Table.Row key={user.id}>
          <Table.Cell>{user.username}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell><Button
            className="admin__delete--user"
            icon>
            <Icon name='trash' />
          </Button>
          </Table.Cell>
          </Table.Row>
      ))}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </div>
    );
  }
}
AdminPanel.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  users: state.user.users,
});
export default connect(mapStateToProps, { fetchUsers })(AdminPanel);
