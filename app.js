var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var csv = require('fast-csv');
var fs = require('fs');
var app = express();

/* --- Setup: View engine --- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/* --- Error handling for 404s --- */
app.use(function(req, res, next) {
  next(createError(404));
});

/* --- Regular error handling --- */
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Only provide error in dev
  res.status(err.status || 500); // Rendering error page
  res.render('pages/error');
});



app.listen(3000);
console.log('App is running on port 3000');

module.exports = app;

fs.createReadStream('test.csv')
  .pipe(csv.parse({ headers: true }))
  .on('data', row => console.log(row));