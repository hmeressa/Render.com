const { ErrorApi } = require('./error.handler')
const globalErrorHandler = (err, req, res, next) => {

    if (err instanceof ErrorApi) {
        return res.status(err.statusCode).json({
            error: err.message,
            statusCode: err.statusCode
        });
    }
    res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = { globalErrorHandler };
