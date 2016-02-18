import React from 'react';
var TodoActions = require('../actions/TodoActions');
import {Link} from 'react-router-component';

const styles = {
  box: {
    height: '100%',
    fontSize: '12px',
    color: '#A9A9A9',
    paddingLeft: '10px',
    width: '100px'
  }
};

const NumberOfListItems = React.createClass({
  render() {
    var allTodos = this.props.allTodos;
    var total = Object.keys(allTodos).length;

    if(total === 0){
      return null;
    }

    return (
        <p style={styles.box}> {total} item left </p>
    )
  }
});

module.exports = NumberOfListItems;
