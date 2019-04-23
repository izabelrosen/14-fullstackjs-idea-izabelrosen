import React, { Component } from 'react';
import connect from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
          to='/signup'
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
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
export default Header;
