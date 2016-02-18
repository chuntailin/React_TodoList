import React from 'react';
import ToDoList from './ToDoList';
import Title from './Title';
import {Link} from 'react-router-component';

const App = React.createClass({
  render() {
    return (
      <div id='site'>
        <Title/>
        <ToDoList/>
      </div>
    )
  }
});

module.exports = App;
