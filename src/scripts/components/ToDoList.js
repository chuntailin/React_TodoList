import React from 'react';
import ToDoListWrap from './ToDoListWrap';
import AllListItems from './AllListItems';
import Footer from './Footer';
import Title from './Title';
// import TodoStore from '../stores/TodoStore.js';
var TodoStore = require('../stores/TodoStore');

const styles = {
  List:{
    width:'500px',
    height: '54px',
    boxShadow: '1px 1px 1px #DCDCDC',
    backgroundColor: '#FFFFFF'
  }
};

  function getTodoState(){
    return{
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
    };
  }

const ToDoList = React.createClass({

  getInitialState: function(){
    return getTodoState();
  },

  _onChange: function(){
    this.setState(getTodoState());
  },

  componentDidMount: function(){
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    TodoStore.removeChangeListener(this._onChange);
  },

  render() {
    
    return (
      <div style={styles.List}>
        < ToDoListWrap/ >
        < AllListItems
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        / >
        < Footer allTodos={this.state.allTodos}/ >
      </div>
    )
  }
});

module.exports = ToDoList;
