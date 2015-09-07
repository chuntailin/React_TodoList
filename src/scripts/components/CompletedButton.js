import React from 'react';

const styles = {
  box: {
    height: '100%',
    width: '75px',
    color: '#A9A9A9',
    backgroundColor: '#FFFFFF',
    border: 'none'
  }
};

const CompletedButton = React.createClass({
  render() {
    return (
        <button type='button' style={styles.box}> Completed </button>
    )
  }
});

module.exports = CompletedButton;
