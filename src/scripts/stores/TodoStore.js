// import AppDispatcher from '../dispatcher/AppDispatcher.js';
// import {EventEmitter} from 'events';
// import TodoConstants from '../constants/TodoConstants.js';
// import assign from 'object-assign';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');


// Server Side Hotfix
// const localStorage = localStorage || {}
const CHANGE_EVENT = 'change';

var _todos = {};

function create(text){
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

function update(id, updates) {
  _todos[id] = assign({}, _todos[id], updates);
}

function updateAll(updates) {
  for (var id in _todos) {
    update(id, updates);
  }
}

function destroy(id) {
  delete _todos[id];
}

function destroyAll(){
  for (var id in _todos) {
      destroy(id);
    }
}


function destroyCompleted() {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}



const TodoStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    // return
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    // return
    this.removeListener(CHANGE_EVENT, listener);
  },

  areAllComplete(){
    for (var id in _todos){
      if (!_todos[id].complete){
        return false;
      }
    }
    return true;
  },

  getAll(){
    return _todos;
  }
});

AppDispatcher.register(function(action) {
  var text;

  switch (action.actionType) {
    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== ''){
        create(text);
        TodoStore.emitChange();
      }
      break;

    case TodoConstants.TODO_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
        TodoStore.emitChange();
      }
      break;

    case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
      if (TodoStore.areAllComplete()){
        updateAll({complete:false});
      }else{
        updateAll({complete:true});
      }
      TodoStore.emitChange();
      break;

      case TodoConstants.TODO_UNDO_COMPLETE:
        update(action.id, {complete: false});
        TodoStore.emitChange();
        break;

    case TodoConstants.TODO_COMPLETE:
        update(action.id, {complete: true});
        TodoStore.emitChange();
        break;

    case TodoConstants.TODO_DESTROY:
      destroy(action.id);
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_DESTROY_ALL:
      destroyAll();
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_DESTROY_COMPLETED:
      destroyCompleted();
      TodoStore.emitChange();
      break;

    default:
  }
  // return true;
});

export default TodoStore;
