import React from 'react';
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');
import {Link} from 'react-router-component';

const styles = {
  wrap: {
    width: 54,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    color: '#AAA',
    border: 0,
    outline: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '36px',
    width: '36px',
    height: '36px',
    opacity: .1,
    ':hover': {
      opacity: 1
    }
  }
};

const DeleteButton = React.createClass({

  _onDestroyClick: function() {
      TodoActions.destroy(this.props.todoId);
    },

  render() {
    return (
      <div style={styles.wrap}>
        <button onClick={this._onDestroyClick} type='button' style={styles.button}>
          <span className='fa fa-times'></span>
        </button>
      </div>
    )
  }
});

module.exports = DeleteButton;
