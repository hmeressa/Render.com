const { userService } = require('../service')

const createUser = async (req, res) => {
    // try {
    console.log("list of users", req.body)
    const result = await userService.createUser(req.body);
    res.send(result);
    // } catch (e) {
    //     throw e;
    // }
}
const getUsers = async (req, res, next) => {
    const result = await userService.getUsers();
    res.send(result);
}

const getUser = async (req, res, next) => {
    const result = await userService.getUser(req.params.id)
    res.send(result);
}

const updateUser = async (id, userData) => {
    const result = await userService.updateUser(id, userData);
}

const deleteUser = async () => {
    return await userService.deleteUser();
}
module.exports =
{
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
};