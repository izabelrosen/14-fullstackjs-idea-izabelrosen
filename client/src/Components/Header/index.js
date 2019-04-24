import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../../Actions/auth';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
    };
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOut() {
    this.props.logoutUser();
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          as={ Link }
          to='/'
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        >
          Portfolio
        </Menu.Item>

        <Menu.Item
          as={Link}
          to='/signin'
          name='signin'
          active={activeItem === 'signin'}
          onClick={this.handleItemClick}
        >
          Sign in
        </Menu.Item>

        <Menu.Item
          as={ Link }
          to='/signup'
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        >
          Sign up
        </Menu.Item>

        <Menu.Item
          as={ Link }
          to='/signin'
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleLogOut}
        >
          Log out
        </Menu.Item>

        <Menu.Item
          as={ Link }
          to='/allchats'
          name='allchats'
          active={activeItem === 'allchats'}
          onClick={this.handleItemClick}
        >
          Chat
        </Menu.Item>
        </Menu>

    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(withRouter(Header));
// export default Header;
