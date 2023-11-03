const { Role } = require('../model')
const appDataSource = require('../config/dbConnection.config');
const { publishToRabbit } = require('../rabbitMQ/producer.rabbitMQ');
const roleRepository = appDataSource.getRepository(Role)
const createRole = async (roleData) => {
    const result = roleRepository.create(roleData);
    const user = await roleRepository.save(result);
    await publishToRabbit(user, 'role.create');
    return user;
}
const getRoles = async () => {
    return await roleRepository.find({ tableName: "roles", relations: ['permission'] });
}

const getRole = async (id) => {
    return await roleRepository.findOne({ where: { id: id } });
}

const updateRole = async (id, roleData) => {
    return await roleRepository.update(id, roleData);
}

const deleteRole = async (id) => {
    return await roleRepository.delete(id);
}


module.exports =
{
    createRole,
    getRoles,
    getRole,
    updateRole,
    deleteRole
};