import React from 'react';

const styles = {
  box: {
    flex:'1',
    fontSize : '25px',
    fontFamily: 'verdana',
    border: 'none',
    paddingLeft: '20px',
    padding: '10px'
  }
};

const ItemContent = React.createClass({
  render() {
    return (
      <text style={styles.box}> Hello World </text>
    )
  }
});

module.exports = ItemContent;
