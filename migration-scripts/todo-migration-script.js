const { ToDoModel } = require("../database-models/ToDo");
const { SampleData } = require("../sample-data/sample-to-dos-data");

const createSampleToDos = async () => {
  await ToDoModel.insertMany(SampleData);

  console.log(`database populated succesfully.`);
};

module.exports = { createSampleToDos };
