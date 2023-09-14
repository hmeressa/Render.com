const { ErrorApi } = require("../handler/error.handler");
const jwt = require('jsonwebtoken')
const verifyToken = (token) => {

    const verifyToken = jwt.verify(token, "12345678910");

    if (!verifyToken) {
        return next(new ErrorApi("Please Login first !", 401));
    }
    return verifyToken;
}

module.exports = { verifyToken };