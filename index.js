//Import from Packages and other Files
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const signUpRouter = require("./routes/signup");
const signInRouter = require("./routes/signin");
const router = require("./routes/userAdmin");

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(signUpRouter);
app.use(signInRouter);
app.use(router);

// Connecting to MongoDB server using Monogo Compass
mongoose
  .connect("mongodb://localhost:27017/InsightWorkshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(function () {
    console.log("Connection successful");
  })
  .catch(function (e) {
    console.log("No connection");
  });

// PORT
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Connected at Port ${PORT}`);
});
