const { userService } = require('../service')
const { ErrorApi } = require("../handler/error.handler");

const createUser = async (req, res, next) => {
    const result = await userService.createUser(req.body);
    res.send(result);
}

const getUsers = async (req, res, next) => {
    const result = await userService.getUsers();
    res.send(result);
}

const getUser = async (req, res, next) => {
    const result = await userService.getUser(req.params.id)
    if (!result) {
        throw new ErrorApi("User Not Found", 404)
    }
    res.send(result);
}

const updateUser = async (req, res, next) => {
    const result = await userService.updateUser(req.params.id, req.body);
    res.send(result)
}

const deleteUser = async (req, res, next) => {
    const result = await userService.deleteUser(req.params.id);
    if (result.affected != 1) {
        throw new ErrorApi("User not Deleted", 404)
    }
    res.send(result)
}

module.exports =
{
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
};