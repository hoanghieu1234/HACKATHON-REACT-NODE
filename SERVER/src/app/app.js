const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routeTodo = require("./routes/route.note");
const app = express();

// MIDDLEWARE
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// ROUTE
app.use("/api/v1/todo", routeTodo);

const port = 8000;
app.listen(port, () => {
  console.log(`SERVER EXPRESS RUNNING ON http://localhost:${port}`);
});
