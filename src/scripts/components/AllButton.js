import React from 'react';

const styles = {
  box: {
    height: '100%',
    width: '30px',
    color: '#A9A9A9',
    backgroundColor: '#F8F8FF',
    border: 'none',
    outline: 'none',
    flex: 1
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
