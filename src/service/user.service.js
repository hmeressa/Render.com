const { User } = require('../model')
const appDataSource = require('../config/dbConnection.config');
const { hashPassword } = require('../utils/hash.util');
const { publishToRabbit } = require('../rabbitMQ/producer.rabbitMQ')
const userRepository = appDataSource.getRepository(User)

const createUser = async (userData) => {

    userData.password = hashPassword(userData.password, 10);
    const create = userRepository.create(userData);
    const savedUser = await userRepository.save(create);
    await publishToRabbit(savedUser, 'user.create1');
    return savedUser;

}
const getUsers = async () => {
    const result = await userRepository.find({ tableName: 'users', relations: ['role.permission'] });
    return result;
}

const getUser = async (id) => {
    const result = await userRepository.findOne({ where: { id: id }, relations: ['role.permission'] });
    return result;
}

const getUserByEmail = async (email) => {
    const result = await userRepository.findOne({ where: { email: email } });
    return result;
}
const updateUser = async (id, userData) => {
    const result = await userRepository.update(id, userData);
    await publishToRabbit(savedUser, 'user.create');
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
    deleteUser,
    getUserByEmail
};