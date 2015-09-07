import React from 'react';
import ToDoListWrap from './ToDoListWrap';
import AllListItems from './AllListItems';
import Footer from './Footer';

const styles = {
  List:{
    width:'500px',
    height: '145px',
    boxShadow: '1px 1px 1px #DCDCDC',
    backgroundColor: '#FFFFFF'
  }
};

const ToDoList = React.createClass({
  render() {
    return (
      <div style={styles.List}>
        < ToDoListWrap/ >
        < AllListItems/ >
        < Footer/ >
      </div>
    )
  }
});

module.exports = ToDoList;
