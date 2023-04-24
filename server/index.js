const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/mainRoutes.js");

const port = 5000;
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://ajharul7:ajharul1234@cluster0.c94fagc.mongodb.net/?retryWrites=true&w=majority"
);
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", mainRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
