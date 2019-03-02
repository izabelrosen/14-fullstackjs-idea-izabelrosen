import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import '../App';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { newMessage } from '../../Actions/message';
/* eslint-disable */
/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["createMessage"] }] */
class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    // this.createMessage = this.createMessage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // UNSAFE_componentWillMount() {
  //   this.props.createMessage();
  //   // this.setState({ message: { ...this.props.message } });
  // }

  // UNSAFE_componentDidMount() {
  //   this.setState({ message: { ...this.props.message } });
  //   this.props.newMessage({ text: 'HALLÅ?'})
  // }

  // componentWillReceiveProps(nextProps, prevState) {
  //   console.log(nextProps);
  //     this.setState({ message: nextProps.message });
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
    console.log(this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('Send button triggered');

    const message = {
      text: this.state.text,
    };
    // console.log(this);
    // // this.props.dispatch(newMessage(message));
    // console.log(this.props);
    // this.props.addMessage(message);
    // this.props.dispatch(newMessage(message));
    //   this.setState({
    //     text: ""
    //   });
    this.props.newMessage(message);


  }

  render() {
    return (
      <div className="createMessage__form">
        <h1>Write a message</h1>
        <form onSubmit={this.handleSubmit}>
        <TextField
        id="standard-textarea"
        name="text"
        onChange = { this.onChange }
        value = { this.state.text }
        placeholder="Message"
        multiline
        margin="normal"
        />

        <Button
        type="submit"
        variant="outlined"
        className="createMessage__send-button"
        label="Send"
        primary={true}
        // onClick={this.createMessage}
        onSubmit={this.onSubmit}
        >Send</Button>
        </form>
      </div>
    );
  }
}

CreateMessage.propTypes = {
  newMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired
};

// CreateMessage.propTypes = {
//   createMessage: PropTypes.func.isRequired,
//   message: PropTypes.object.isRequired
// };

// const mapDispatchToProps = (dispatch) => ({
//   addMessage(message) {
//     dispatch(newMessage(message))
//   }
// });

export default connect(null, { newMessage })(CreateMessage);

