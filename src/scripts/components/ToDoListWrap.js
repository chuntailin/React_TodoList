import React from 'react';
import InputBox from './InputBox';
import CheckAllButton from './CheckAllButton';
import SubmitButton from './SubmitButton'
// import TodoAction from '../actions/TodoAction.js';
var TodoActions = require('../actions/TodoActions');

const styles = {
  wrap: {
    height: '54px',
    display: 'flex'
  }
};

const ToDoListWrap = React.createClass({

  _onSave: function(text) {
    if (text.trim()){
      TodoActions.create(text);
    }
  },

  render() {
    return (
      <div style={styles.wrap}>
      < CheckAllButton / >
      < InputBox onSave={this._onSave}/ >
      < SubmitButton / >
      </div>
    )
  }
});

module.exports = ToDoListWrap;
