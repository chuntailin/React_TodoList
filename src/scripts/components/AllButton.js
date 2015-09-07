import React from 'react';

const styles = {
  box: {
    height: '100%',
    width: '30px',
    color: '#A9A9A9',
    backgroundColor: '#FFFFFF',
    border: 'none'
  }
};

const AllButton = React.createClass({
  render() {
    return (
        <button type='button' style={styles.box}> All </button>
    )
  }
});

module.exports = AllButton;
