const { ErrorApi } = require("../handler/error.handler");
const { userService } = require("../service");
const { createToken } = require('../middleware/createToken.middleware')
const { comparePassword } = require("../utils/comaparePassword.util");

const auth = async (req, res, next) => {

    const { password, email } = req.body;
    const result = await userService.getUserByEmail(email);

    if (!result) {
        return next(new ErrorApi("User Not Found", 404));
    }

    if (!comparePassword(password, result.password)) {
        return next(new ErrorApi("Password is Not Correct", 404));
    }

    const token = await createToken({ id: result.id })
    res.send(token)
}

module.exports = { auth };