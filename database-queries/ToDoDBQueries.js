const { ToDoModel } = require("../database-models/ToDo");

const findAllToDos = async () => {
  const toDos = await ToDoModel.find({});

  return toDos;
};

const createToDo = async (title, description) => {
  await ToDoModel.create({ title: title, description: description });

  return `Operation completed successfully.`;
};

const getToDoByMonth = async (month, year) => {
  const toDo = await ToDoModel.findOne({
    $expr: { $eq: [{ $month: "$date" }, month], $eq: [{ $year: "$date" }, year] }
  });

  return toDo;
};

const getToDoDatesByYearAndMonth = async () => {
  const toDos = await ToDoModel.aggregate([
    {
      $project: {
        month: { $month: `$date` },
        year: { $year: `$date` }
      }
    }
  ]);

  return toDos;
};

module.exports = { findAllToDos, createToDo, getToDoByMonth, getToDoDatesByYearAndMonth };
