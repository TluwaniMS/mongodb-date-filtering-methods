const { model, Schema } = require("mongoose");

const ToDoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now() }
});

const ToDoModel = model("ToDo", ToDoSchema);
