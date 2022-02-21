const { ToDoModel } = require("../database-models/ToDo");

const findAllToDos = async () => {
  const toDos = await ToDoModel.find({});

  return toDos;
};

const createToDo = async (title, description) => {
  await ToDoModel.create({ title: title, description: description });

  return `Operation completed successfully.`;
};

const getToDoByMonth = async (month) => {
  const toDo = await ToDoModel.findOne({ $where:function (month) { console.log(this.date)} });

  return toDo;
};

module.exports = { findAllToDos, createToDo, getToDoByMonth };
