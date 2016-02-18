import React from 'react';
import InputBox from './InputBox';
import CheckAllButton from './CheckAllButton';
import SubmitButton from './SubmitButton'
var TodoActions = require('../actions/TodoActions');
import {Link} from 'react-router-component';

const styles = {
  wrap: {
    height: '54px',
    display: 'flex'
  }
};

const ToDoListWrap = React.createClass({

  render() {
    return (
      <div style={styles.wrap}>
      < CheckAllButton isCollapsed={this.props.isCollapsed} toggleComplete={this.props.toggleComplete}/ >
      < InputBox / >
      </div>
    )
  }
});

module.exports = ToDoListWrap;
