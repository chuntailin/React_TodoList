import React from 'react';

const styles = {
  box: {
    height: '100%',
    fontSize: '12px',
    color: '#A9A9A9',
    paddingRight: '110px',
    paddingTop: '5px'
  }
};

const NumberOfListItems = React.createClass({
  render() {
    return (
        <text style={styles.box}> 1 item left </text>
    )
  }
});

module.exports = NumberOfListItems;
