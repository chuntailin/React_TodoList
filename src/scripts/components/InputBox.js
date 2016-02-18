import React from 'react';
import {Link} from 'react-router-component';
var ReactPropTypes = React.PropTypes;
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');

const styles = {
  box: {
    flex:'1',
    fontSize : '25px',
    fontFamily: 'serif',
    fontStyle: 'italic',
    border: 'none',
    paddingLeft: '15px',
    outline: 'none'
  }
};



const InputBox = React.createClass({

  getInitialState: function() {
    return {
      content: ''
    }
  },

  componentDidMount(){
    TodoStore.addChangeListener(this.todoUpdate);
  },

  componentWillUnmount(){
    TodoStore.removeChangeListener(this.todoUpdate);
  },

  todoUpdate(){
    this.setState({
      content: ''
    });
  },

  _onChange: function(e){
    this.setState({
      content: e.target.value
    });
  },

  _onKeyDown: function(e){
    if (e.keyCode === 13 && this.state.content){
      TodoActions.create(this.state.content);
    }
  },

  render() {
    return (
     <input
        style={styles.box}
        placeholder="What needs to be done ? "
        type='text'
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.content}
     />
    )
  }
});

module.exports = InputBox;
