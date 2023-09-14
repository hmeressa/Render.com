const express = require('express');
const app = express();

const routes = require('./route');
const { ErrorApi } = require('./handler/error.handler');
const httpStatus = require('http-status');
const { globalErrorHandler } = require('./handler/globalErrorHandler.handler');


// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// use global route
app.use('/api', routes)

// use global Error handler
app.use(globalErrorHandler);

app.use('*', (req, res, next) => {
    return next(new ErrorApi("Route Not Found", httpStatus.NOT_FOUND, "Failed"))
})


module.exports = app;