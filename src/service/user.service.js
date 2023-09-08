const { User } = require('../model')
const appDataSource = require('../config/dbConnection.config')
const userRepository = appDataSource.getRepository(User)
const createUser = async (userData) => {
    const create = userRepository.create(userData);
    return await userRepository.save(create);
}
const getUsers = async () => {
    const result = await userRepository.find({ tableName: 'users', relations: ['role'] });
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

const deleteUser = async (id) => {
    return await userRepository.delete(id);
}


module.exports =
{
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
};