const { ErrorApi } = require('../handler/error.handler');
const { getAuthToken } = require('../middleware/authToken.middleware');
const { verifyToken } = require('./verifyToken.middlware');
const { userService } = require('../service')

const authorize = async (req, res, next) => {
    try {
        const authToken = getAuthToken(req, res, next);
        const verify = verifyToken(authToken)
        if (!verify) {
            return next(new ErrorApi("Please Login first!", 401));
        }
        const user = await userService.getUser(verify.id);
        if (!user) {
            return next(new ErrorApi("User Not Found", 400));
        }
        req.user = user;
        next();

    } catch (error) {
        return next(new ErrorApi("Please Login first!", 401));
    }
};

module.exports = { authorize };
