import React from 'react';
import CheckButton from './CheckButton';
import InputBox from './InputBox';
import DeleteButton from './DeleteButton';
import ItemContent from './ItemContent';
import {Link} from 'react-router-component';
var TodoActions = require('../actions/TodoActions');
var ReactPropTypes = React.PropTypes;

const styles = {
  check: {
    height: '54px',
    display: 'flex',
    borderTop :'1.5px solid #DCDCDC'
  }
};

const T = React.PropTypes;

const ListItems = React.createClass({

  propTypes: {
    todo: T.object.isRequired
  },

  render() {

    return (
        <div style={styles.check} >
          <CheckButton isCompleted={this.props.todo.complete} todoId={this.props.todo.id}/ >
          <ItemContent content={this.props.todo.content}/ >
          <DeleteButton todoId={this.props.todo.id}/ >
        </div>
    )
  }
});

module.exports = ListItems;
