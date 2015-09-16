import React from 'react';
var TodoActions = require('../actions/TodoActions');

const styles = {
  box: {
    width: '54px',
    height: '54px',
    backgroundColor: 'transparent',
    borderColor: '#F8F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none'
  }
};

const CheckButton = React.createClass({

  _onToggleComplete: function(){
    TodoActions.toggleComplete(this.props.todos);
  },

  render() {
    var todos = this.props.todos;

    return (
      <input
      type="checkbox"
      style={styles.box}
      // checked={todo1.complete}
      // className="fa fa-check"
      onChange={this._onToggleComplete}
      />
    )
  }
});

module.exports = CheckButton;
