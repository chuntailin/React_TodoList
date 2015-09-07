import React from 'react';
import ToDoList from './ToDoList'

const App = React.createClass({
  render() {
    return (
      <div id='site'>
        <ToDoList/>
      </div>
    )
  }
});

module.exports = App;
