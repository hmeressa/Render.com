const { User, Role } = require('../model')
const appDataSource = require('../config/dbConnection.config');
const { hashPassword } = require('../utils/hash.util');
const publishToRabbit = require('../rabbitMQ/producer');

const userRepository = appDataSource.getRepository(User)

const roleRepository = appDataSource.getRepository(Role)

const createUser = async (userData) => {

    userData.password = hashPassword(userData.password, 10);
    const role = await roleRepository.findOne({ where: { producerId: userData.roleId } })


    const create = userRepository.create({
        roleId: role.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        produceruserId: userData.id

    });
    await publishToRabbit("create", create)
    return await userRepository.save(create);
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