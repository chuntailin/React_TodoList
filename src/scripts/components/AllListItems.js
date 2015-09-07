import React from 'react';
import ListItems from './ListItems';


const styles = {
  wrap: {

  }
};

const AllListItems = React.createClass({
  render() {
    var ListItemsArray = [];
    return (
      <div style={styles.wrap}>
      < ListItems / >
      </div>
    )
  }
});

module.exports = AllListItems;
