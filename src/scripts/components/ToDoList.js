import React from 'react';
import ToDoListWrap from './ToDoListWrap';
import ListItems from './ListItems';
import Footer from './Footer';
import Title from './Title';
import {Link} from 'react-router-component';
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');

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
      complete: false
    };
  }

const ToDoList = React.createClass({

  getInitialState: function(){
    return getTodoState();
  },

  componentDidMount: function(){
    TodoStore.addChangeListener(this._onChange);
    TodoActions.fetch();
  },

  componentWillUnmount: function(){
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState(getTodoState());
  },

  toggleComplete: function(){
    this.setState({
      complete: !this.state.complete
    });
  },

  render() {
    const list = this.state.complete ? [] : this.state.allTodos;

    return (
      <div style={styles.List}>
        < ToDoListWrap isCollapsed={this.state.complete} toggleComplete={this.toggleComplete}/ >
        {list.map((todo) => {
          return <ListItems todo={todo} />
        })}
        < Footer allTodos={this.state.allTodos}/ >
      </div>
    )
  }
});

module.exports = ToDoList;
