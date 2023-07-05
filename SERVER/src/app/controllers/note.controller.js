const controllerTodo = require("../models/model.note");

const postTodo = (req, res) => {
  controllerTodo.modelPostNote(req, res);
};
const getTodo = (req, res) => {
  controllerTodo.modelGetNote(res);
};

const editTodo = (req, res) => {
  const idParams = req.params.id;
  controllerTodo.modelEditNote(idParams, req, res);
};

const delteTodo = (req, res) => {
  const idParams = req.params.id;
  controllerTodo.modelDeleteNote(idParams, req, res);
};

module.exports = { postTodo, getTodo, editTodo, delteTodo };
