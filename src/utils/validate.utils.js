// const Joi = require('joi');
// const httpStatus = require('http-status');
// const ErrorApi = require('../handler');

// const validate = (schema) => (req, res, next) => {
//     // const validSchema = pick(schema, ['params', 'query', 'body']);
//     // const object = pick(req, Object.keys(validSchema));
//     const { value, error } = Joi
//         .prefs({ errors: { label: 'key' }, abortEarly: false })
//     // .validate(object);

//     if (error) {
//         const errorMessage = error.details.map((details) => details.message).join(', ');
//         return next(new ErrorApi(httpStatus.BAD_REQUEST, errorMessage));
//     }
//     Object.assign(req, value);
//     return next();
// };

// module.exports = validate;