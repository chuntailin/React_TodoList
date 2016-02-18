import React from 'react';
var TodoActions = require('../actions/TodoActions');
import {Link} from 'react-router-component';


const styles = {
  wrap: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    color: 'green',
    border: '1px solid #DDD',
    outline: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '36px',
    width: '36px',
    height: '36px'
  }
};

const CheckButton = React.createClass({

  _onToggleComplete: function(){
    TodoActions.toggleComplete(this.props.todoId);
  },

  render() {

    return (
      <div style={styles.wrap}>
        <button type='button' onClick={this._onToggleComplete} style={styles.button}>
          {this.props.isCompleted ? <span className='fa fa-check'></span> : null}
        </button>
      </div>
    )
  }
});

module.exports = CheckButton;
