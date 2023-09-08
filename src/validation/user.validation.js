const Joi = require('joi')
const createUser = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}
const getUsers = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId),
    }),
}
const getUser = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId),
    }),
}

module.exports = {
    createUser,
    getUsers,
    getUser
}