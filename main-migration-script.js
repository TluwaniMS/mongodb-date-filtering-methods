const { createSampleToDos } = require("./migration-scripts/todo-migration-script");
const { findAllToDos } = require("./database-queries/ToDoDBQueries");
const { connectToDataBase } = require("./database-configuration");

(async () => {
  await connectToDataBase();
  const toDos = await findAllToDos();

  toDos.length === 0 ? await createSampleToDos() : console.log(`database already populated.`);

  process.exit();
})();
