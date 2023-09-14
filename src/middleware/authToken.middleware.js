const { ErrorApi } = require("../handler/error.handler");

const getAuthToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return next(new ErrorApi("Please Login first!", 401));
        }
        return token;
    } else {
        return next(new ErrorApi("Please Login first!", 401));
    }
};

module.exports = { getAuthToken };
