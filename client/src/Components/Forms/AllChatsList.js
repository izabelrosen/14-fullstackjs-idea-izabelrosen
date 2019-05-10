import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { fetchMessages, socketMessage } from '../../Actions/message';

const socket = io.connect('http://localhost:3003');

// This doesnot work by adding to allow's..
// /* eslint camelcase: ["error", {allow: ["UNSAFE_componentWillMount",
// "UNSAFE_componentWillReceiveProps"]}] */
/* eslint-disable */
class AllChatsList extends Component {
  UNSAFE_componentWillMount = () => {
    this.props.fetchMessages();
  }

  componentDidMount = () => {
    socket.on('new_chat_message', (msg) => {
      this.props.socketMessage(msg);
    })
  };

  // ** Auto update: Why doesnt this work? Do I even need it? Socket will handle it?
  // problem is when creating a new message it saves but only as a new message
  // But after reloading the page it adds to the array with the rest of info
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (nextProps.newMessage) {
      this.props.messages.push(nextProps.newMessage);
    }
  }

  render() {
    const messageItems = this.props.messages.map(message => (
      <div key={message._id}>
        <h3>{message.text}</h3>
      </div>
    ));
    return (
      <div>
      <h3>här är alla meddelanden</h3>
      {messageItems}
      </div>
    );
  }
}
// messages from the root reducer, items from message reducer
AllChatsList.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  socketMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  newMessage: PropTypes.object,
};

const mapStateToProps = state => ({
  messages: state.messages.messages,
  newMessage: state.messages.message,
});
export default connect(mapStateToProps, { fetchMessages, socketMessage })(AllChatsList);
