import React from 'react';

const styles = {
  box: {
    flex:'1',
    fontSize : '25px',
    fontFamily: 'serif',
    fontStyle: 'italic',
    border: 'none',
    paddingLeft: '15px'
  }
};

const InputBox = React.createClass({
  render() {
    return (
        <input type="text" style={styles.box} placeholder="What needs to be done ? "/>
    )
  }
});

module.exports = InputBox;
