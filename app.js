const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// middleware

app.use(express.json());
app.use(express.static("./public"));
// Routes

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')            --> Get all the tasks
// app.post('/api/v1/tasks')           --> Create a new task
// app.get('/api/v1/tasks/:id')        --> Get single task
// app.patch('/api/v1/tasks/:id')      --> Update a single task
// app.delete('/api/v1/tasks/:id')     --> Delete a single task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
