import React from 'react';

const styles = {
  box: {
    height: '100%',
    width: '50px',
    color: '#A9A9A9',
    backgroundColor: '#FFFFFF',
    border: 'none'
  }
};

const ActiveButton = React.createClass({
  render() {
    return (
        <button type='button' style={styles.box}> Active </button>
    )
  }
});

module.exports = ActiveButton;
