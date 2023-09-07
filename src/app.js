const express = require('express');
const app = express();

const routes = require('./route');
const { ErrorApi } = require('./handler/error.handler');
const httpStatus = require('http-status');


// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes)

app.use('*', (req, res, next) => {
    return next(new ErrorApi("Route Not Found", httpStatus.NOT_FOUND, "Failed"))
})
module.exports = app;