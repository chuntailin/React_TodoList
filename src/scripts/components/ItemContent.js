import React from 'react';
var TodoActions = require('../actions/TodoActions');
var ReactPropTypes = React.PropTypes;

const styles = {
  box: {
    // flex:'1',
    // fontSize : '20px',
    // fontFamily: 'verdana',
    // border: 'none',
    // paddingLeft: '22px',
    // padding: '10px'
  }
};

const ItemContent = React.createClass({

  propTypes: {
    todo1: ReactPropTypes.object.isRequired
  },

  render() {
    var todo1 = this.props.todo;

    return (
      <label>
      {todo1.text}
      </label>
    )
  }
});

module.exports = ItemContent;
