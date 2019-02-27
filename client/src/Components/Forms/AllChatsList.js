import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMessages } from '../../Actions/message';
// import message from '../../Reducers/message';
// import Avatar from '@material-ui/core/Avatar';

// For some reason the eslint camelcase doesnt allow to use the one beneath, therefore add disable
// /* eslint camelcase: ["error", {allow: ["UNSAFE_componentWillMount"]}] */
/* eslint-disable */

class AllChatsList extends Component {
  UNSAFE_componentWillMount() {
    // let { dispatch } = this.props;
    // dispatch(fetchMessages());
    this.props.fetchMessages();
  }

  // *** STATE FROM HERE BEFORE PROPS ***
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     messages: [],
  //   };
  // }

  // componentDidMount() {
  //   this.setState({

  //   });
  //   fetch('http://localhost:3003/messages')
  //     .then(res => res.json())
  //     .then(data => this.setState({ messages: data }));
  // }
  // *** UNTIL HERE ***

  render() {
    console.log(this.props);
    const messageItems = this.props.messages.map(message => (
      <div key={message.id}>
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
// AllChatsList.propTypes = { fetchMessages: PropTypes.func.isRequired };
AllChatsList.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages.messages,
});
export default connect(mapStateToProps, { fetchMessages })(AllChatsList);

