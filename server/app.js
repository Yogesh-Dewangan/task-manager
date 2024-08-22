const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const createError = require("http-errors");
const path = require("path");
const jwt = require("jsonwebtoken");
const process = require("process");
const passport = require("./passport-config/passport-config");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const tasksRouter = require("./routes/tasks");
const loginWithGoogleRouter = require("./routes/login-with-google");

const PORT = process.env.PORT || 5000;
const secret = process.env.SECRET;
const url = process.env.MONGO;

mongoose
  .connect(url)
  .then(console.log("mongoose atlas is up"))
  .catch(console.error);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());

app.use("/v1/tasks", (req, res, next) => {
  const token = req.headers.authorization;
  console.log("\x1b[41m%s\x1b[0m", "token: ", token);

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(400).json({
          status: "Failed to decode",
          message: err.message,
        });
      }
      if (decoded) {
        console.log(
          "\x1b[41m%s\x1b[0m",
          "user - decoded: ",
          req.user,
          decoded.data
        );
        req.user = decoded.data;
        next();
      }
    });
  } else {
    return res.status(403).json({
      status: "Failed",
      message: "Invalid Token",
    });
  }
});

app.use("/", indexRouter);
app.use("/v1/auth/google", loginWithGoogleRouter);
app.use("/v1/auth/signup", registerRouter);
app.use("/v1/auth/login", loginRouter);
// app.use("/v1/users", usersRouter);
// app.use("/v1/tasks", tasksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + "/public")));
}

app.listen(PORT, () => console.log(`Server is up at ${PORT} port`));

module.exports = app;
