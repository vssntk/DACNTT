var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var logger = require('morgan');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var isLoggedIn = require('./middleware/isLoggedIn.js')
var credentials = require("./credentials.js")
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.use('/images', express.static(__dirname + '/public/images/'));
// app.use('/stylesheets', express.static(__dirname + '/public/stylesheets/'));
app.use(express.static(__dirname + '/public/'));

//session
app.use(session({
  secret: credentials.sessionSecret,
  maxAge: 60 * 60 * 1000, //1 hour - time of session
  resave: false,
  saveUninitialized: false,
}))

//cookie
app.use(cookieParser(
  credentials.cookieSecret, //cookieSecret
  {
      maxAge: 60 * 60 * 1000, //1 hour - time of cookie
  }
));

let opts = {};
//MongoDB
switch (app.get('env')) {
  case 'development':
      mongoose.connect(credentials.mongo.development.connectionString, opts).then(() => {
          console.log("Đã kết nối tới Database")
      }).catch((err) => {
          console.log(err)
      })
      break
  //TODO: add production link here


  default:
      throw new Error('Unknown execution environment: ' + app.get('env'))
}

//flash message
app.use(function (req, res, next) {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
})

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;