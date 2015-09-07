import React from 'react';
import InputBox from './InputBox';
import CheckAllButton from './CheckAllButton'

const styles = {
  wrap: {
    height: '54px',
    display: 'flex',
    // backgroundColor: '#FFFFFF'
  }
};

const ToDoListWrap = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
      < CheckAllButton / >
      < InputBox / >
      </div>
    )
  }
});

module.exports = ToDoListWrap;
