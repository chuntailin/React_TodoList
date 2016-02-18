import React from 'react';
var TodoActions = require('../actions/TodoActions');
import {Link} from 'react-router-component';

const styles = {
  wrap: {
    width: 54
  },
  button: {
    backgroundColor: 'transparent',
    color: '#AAA',
    display: 'flex',
    width: '100%',
    border: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    ':hover': {
      color: '#777'
    }
  }
};

const CheckAllButton = React.createClass({

  render() {
    return (
      <div style={styles.wrap}>
        <button onClick={this.props.toggleComplete} type='button' style={styles.button}>
          <span className={'fa ' + (this.props.isCollapsed ? 'fa-chevron-up' : 'fa-chevron-down')}></span>
        </button>
      </div>
    )
  }
});

module.exports = CheckAllButton;
