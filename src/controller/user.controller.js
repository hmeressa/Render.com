const { userService } = require('../service')

const createUser = async (req, res, next) => {
    console.log("list of users", req.body)
    const result = await userService.createUser(req.body);
    res.send(result);
}
const getUsers = async (req, res, next) => {
    const result = await userService.getUsers();
    res.send(result);
}

const getUser = async (req, res, next) => {
    const result = await userService.getUser(req.params.id)
    res.send(result);
}

const updateUser = async (req, res, next) => {
    const result = await userService.updateUser(req.params.id, req.body);
    res.send(result)
}

const deleteUser = async () => {
    const result = await userService.deleteUser();
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