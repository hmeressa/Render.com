const { userService } = require('../service')
const { ErrorApi } = require("../handler/error.handler");
const httpStatus = require('http-status');
const { RedisInstance } = require('../config/redis.config');

const createUser = async (req, res, next) => {
    const result = await userService.createUser(req.body);
    // const redisStorage = RedisInstance.set("RedisStorage", result);
    res.status(200).json({
        status: result,
        statusCode: 200,
    });
}

const getUsers = async (req, res, next) => {
    const result = await userService.getUsers();

    RedisInstance.get('RedisStorage')
        .then((result) => {
            if (result) {
                const parsedData = JSON.parse(result);
                console.log('Data from Redis:', parsedData);
                res.status(200).json(parsedData);
            } else {
                console.log('No data found in Redis.');
                res.status(404).send('No data found in Redis.');
            }
        })
        .catch((error) => {
            console.error('Error fetching data from Redis:', error);
            res.status(500).send('Error fetching data from Redis.');
        });

    // Export the Express app for use in your main application file
    module.exports = app;
    res.status(200).json({
        statusCode: 200,
        status: "Success",
        User: result
    });
}

const getUser = async (req, res, next) => {
    const result = await userService.getUser(req.params.id)
    if (!result) {
        return next(new ErrorApi("User not Found", 404))
    }
    res.status(200).json({
        statusCode: 200,
        status: "Success",
        User: result
    });
}

const updateUser = async (req, res, next) => {
    const result = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({
        statusCode: 200,
        status: "Success",
        User: result
    });
}

const deleteUser = async (req, res, next) => {
    const result = await userService.getUser(req.params.id);
    if (!result) {
        return next(new ErrorApi("User not Found", 404))
    }
    await userService.deleteUser(req.params.id);

    res.status(200).json({
        statusCode: 200,
        status: "Success",
        User: result
    });
}

module.exports =
{
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
};