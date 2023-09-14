const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign(id, "12345678910");
}

module.exports = { createToken };