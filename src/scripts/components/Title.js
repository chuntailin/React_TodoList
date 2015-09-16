import React from 'react';

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'monospace',
    fontSize: '2.5em',
    color: '#99CCFF',
    backgroundColor: '#F8F8FF'
  }
};

const Title = React.createClass({
  render() {
    return (
        <p style={styles.box}> Todo </p>
    )
  }
});

module.exports = Title;
