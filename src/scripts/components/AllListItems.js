import React from 'react';
import ListItems from './ListItems';
// import TodoAction from '../actions/TodoAction.js';
var TodoActions = require('../actions/TodoActions');
var ReactPropTypes = React.PropTypes;

const styles = {
  wrap: {
  }
};

const AllListItems = React.createClass({


    propTypes: {
      allTodos: ReactPropTypes.object.isRequired,
      areAllComplete: ReactPropTypes.bool.isRequired
    },


  render() {
    if(Object.keys(this.props.allTodos).length < 1){
      return null;
    }

    var allTodos = this.props.allTodos;
    var todos = [];

    for (var key in allTodos){
      todos.push(<ListItems key={key} todo={allTodos[key]} />);
    }

    return (
      <div style={styles.wrap}>
      {todos}
      </div>
    )
  }
});

module.exports = AllListItems;
