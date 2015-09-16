import React from 'react';
var TodoActions = require('../actions/TodoActions');

const styles = {
  box: {
    height: '100%',
    color: '#A9A9A9',
    backgroundColor: '#F8F8FF',
    border: 'none',
    outline: 'none',
    flex: 1
  }
};

const ClearAllButton = React.createClass({

  _onClear: function(){
    TodoActions.destroyAll()
  },

  render() {
    var allTodos = this.props.allTodos;
    var total = Object.keys(allTodos).length;

    if(total === 0){
      return null;
    }

    return (
        <button type='button' onClear={this._onClear} style={styles.box} >
        Clear All
        </button>
    )
  }
});

module.exports = ClearAllButton;
