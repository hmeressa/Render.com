const { Role } = require('../model')
const appDataSource = require('../config/dbConnection.config')
const roleRepository = appDataSource.getRepository(Role)
const createRole = async (roleData) => {
    const result = roleRepository.create(roleData);
    return await roleRepository.save(result);
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