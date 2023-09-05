const { User } = require('../model')
const appDataSource = require('../config/dbConnection.config')
const userRepository = appDataSource.getRepository(User)
const createUser = async (userData) => {
    const create = userRepository.create(userData);
    return await userRepository.save(create);
}
const getUsers = async () => {
    const result = await userRepository.find();
    return result;
}

const getUser = async (id) => {
    const result = await userRepository.findOne({ where: { id: id } });
    return result;
}

const updateUser = async (id, userData) => {
    const result = await userRepository.update(id, userData);
    return result;
}

const deleteUser = async () => {

}


module.exports =
{
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
};