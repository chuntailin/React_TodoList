import React from 'react';
import CheckButton from './CheckButton';
import ItemContent from './ItemContent';
import DeleteButton from './DeleteButton';

const styles = {
  check: {
    height: '54px',
    display: 'flex',
    borderTop :'1.5px solid #DCDCDC',
    // backgroundColor: '#FFFFFF'
  }
};

const ListItems = React.createClass({
  render() {
    return (
      <div style={styles.check}>
      <CheckButton/ >
      <ItemContent/ >
      <DeleteButton/ >
      </div>
    )
  }
});

module.exports = ListItems;
