const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose dataBase connection established sucessfully");
});

app.get("/", (req, res) => {
  res.end("hello i m node server?");
});
const exercisesRoutes = require("./routes/exercises");
const usersRoutes = require("./routes/users");

app.use("/exercises", exercisesRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
