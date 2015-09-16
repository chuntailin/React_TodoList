import React from 'react';

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

const ActiveButton = React.createClass({
  render() {
    return (
        <button type='button' style={styles.box}> Active </button>
    )
  }
});

module.exports = ActiveButton;
