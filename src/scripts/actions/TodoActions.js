// import AppDispatcher from '../dispatcher/AppDispatcher.js';
// import TodoConstants from '../constants/TodoConstants.js';
// import TodoStore from '../stores/TodoStore.js';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var TodoStore = require('../stores/TodoStore');
import qs from 'querystring';

export default {

  fetch: function(){
    const req = new XMLHttpRequest();
    req.open('GET','/api/todos');
    req.responseType = 'json';
    req.onreadystatechange = function(){
      if (req.readyState !== 4 || req.status !== 200) return;

      AppDispatcher.dispatch({
        todos: req.response,
        action: TodoConstants.TODO_FETCH
      });
    };
    req.send();
  },

  create: function(content) {
    const data = qs.stringify({
      content: content
    });
    
    const req = new XMLHttpRequest();
      req.open('POST', '/api/todos');
      req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      req.responseType = 'json';
      req.onreadystatechange = function () {
        if (req.readyState !== 4 || req.status !== 201) return;

        AppDispatcher.dispatch({
          id: req.response.id,
          content: content,
          action: TodoConstants.TODO_CREATE,
        });
      };
      req.send(data);
    },

  destroy: function(todoId) {
    const req = new XMLHttpRequest();
    req.open('DELETE', '/api/todos/' + todoId);
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 204) return;

      AppDispatcher.dispatch({
        id: todoId,
        action: TodoConstants.TODO_DESTROY,
      });
    };
    req.send();
  },

  toggleComplete: function(todoId) {
    const req = new XMLHttpRequest();
    req.open('PATCH','/api/todos/' + todoId + '/toggleComplete');
    req.responseType = 'json';
    req.onreadystatechange = function(){
      if (req.readyState !== 4 || req.status !== 204) return;

      AppDispatcher.dispatch({
        action: TodoConstants.TODO_TOGGLE_CHECK,
        id: todoId
      });
    };
    req.send();
  }
}
