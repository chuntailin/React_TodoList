var express = require('express');
var router = express.Router();
var _ = require('lodash');

var todos = [];

router.get('/', function (req, res) {
  res.json(todos);
});

router.post('/', function (req, res) {
  if (!req.body.content) {
    res.status(401);
    return res.json({
      message: 'Parameter Error'
    });
  }

  var todoId = Math.random();

  todos.push({
    id: todoId,
    content: req.body.content,
    complete: false
  });

  res.status(201);
  res.json({
    id: todoId
  });
});

router.patch('/:todoId/toggleComplete', function (req, res) {
  var todo = _.find(todos, {
    id: parseFloat(req.params.todoId)
  });

  if (todo) {
    todo.complete = !todo.complete;
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

router.delete('/:todoId', function (req, res) {
  var todoIndex = _.findIndex(todos, {
    id: parseFloat(req.params.todoId)
  });

  if (~todoIndex) {
    todos.splice(todoIndex, 1);
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

module.exports = router;
