import React from 'react';
import NumberOfListItems from './NumberOfListItems';
import AllButton from './AllButton';
import ActiveButton from './ActiveButton';
import CompletedButton from './CompletedButton';
import ClearAllButton from './ClearAllButton';
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');

const styles = {
  check: {
    height: '35px',
    borderTop :'1.5px solid #DCDCDC',
    display: 'flex'
  }
};

const Footer = React.createClass({

  render() {
    var allTodos = this.props.allTodos;

    return (
      <div style={styles.check}>
      <NumberOfListItems allTodos={this.props.allTodos}/ >
      <AllButton/ >
      <ActiveButton/ >
      <CompletedButton/ >
      <ClearAllButton allTodos={this.props.allTodos}/ >
      </div>
    )
  }
});

module.exports = Footer;
