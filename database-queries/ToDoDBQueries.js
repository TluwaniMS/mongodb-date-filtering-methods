const { ToDoModel } = require("../database-models/ToDo");

const findAllToDos = async () => {
  const toDos = await ToDoModel.find({});

  return toDos;
};

const createToDo = async (title, description) => {
  await ToDoModel.create({ title: title, description: description });

  return `Operation completed successfully.`;
};

module.exports = { findAllToDos, createToDo };
