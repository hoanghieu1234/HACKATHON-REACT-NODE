const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const routeUser = require("./routes/route.user");

const app = express();

// MIDDLEWARE
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// ROUTE
app.use("/api/v1/user", routeUser);
// RUN SERVER
const port = 8000;
app.listen(port, () => {
  console.log(`SERVER RUNNING ON http://localhost:${port}`);
});
