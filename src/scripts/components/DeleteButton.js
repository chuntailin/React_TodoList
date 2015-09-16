import React from 'react';
var TodoActions = require('../actions/TodoActions');

const styles = {
  box: {
    width: '54px',
    height: '54px',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none'
  }
};

const DeleteButton = React.createClass({

  _onDestroyClick: function() {
      var keys = this.props.todo.id;
      TodoActions.destroy(keys);
    },

  render() {
    var todo = this.props.todo;

    return (
        < button
          type="button"
          style={styles.box}
          onClick={this._onDestroyClick}
          className="fa fa-times"
         />
    )
  }
});

module.exports = DeleteButton;
