/* eslint-disable react/no-deprecated */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { fetchUsers } from '../../Actions/user';
import './style.css';

class AdminPanel extends Component {
  componentWillMount = () => {
    this.props.fetchUsers();
  }

  render() {
    const userItems = this.props.users.map(user => (
      <div key={user.id}>
        <h4>{user.email}</h4>
      </div>
    ));
    return (
      <div className="adminpanel">
        <h1>admin</h1>
        <div>
          <h4>{userItems}</h4>
        </div>

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
AdminPanel.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  users: state.user.users,
});
export default connect(mapStateToProps, { fetchUsers })(AdminPanel);
