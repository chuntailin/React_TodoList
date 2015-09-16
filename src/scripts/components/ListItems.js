import React from 'react';
import CheckButton from './CheckButton';
import InputBox from './InputBox';
import DeleteButton from './DeleteButton';
// import TodoAction from '../actions/TodoAction.js';
var TodoActions = require('../actions/TodoActions');
var ReactPropTypes = React.PropTypes;

const styles = {
  check: {
    height: '54px',
    display: 'flex',
    borderTop :'1.5px solid #DCDCDC'
  }
};

const ListItems = React.createClass({

  propTypes: {
    todo: ReactPropTypes.object.isRequired
  },

  _onSave: function(text) {
    TodoActions.updateText(this.props.todo.id, text);
  },


  render() {
    var todo = this.props.todo;

    return (
        <div style={styles.check} key={todo.id}>
          <CheckButton todo={this.props.todo}/ >
          <label style={
            {height: '100%',
            paddingTop: '3px',
            flex: 1,
            fontSize: '20px'}
          }>
          {todo.text}
          </label>
          <DeleteButton todo={this.props.todo}/ >
        </div>
    )
  }
});

module.exports = ListItems;
