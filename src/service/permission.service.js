const { Permission } = require('../model')
const appDataSource = require('../config/dbConnection.config')
const permissionRepository = appDataSource.getRepository(Permission)
const createPermission = async (permissionData) => {
    const result = permissionRepository.create(permissionData);
    return await permissionRepository.save(result);
}
const getPermissions = async () => {
    return await permissionRepository.find();
}

const getPermission = async (id) => {
    return await permissionRepository.findOne({ where: { id: id } });
}

const updatePermission = async (id, permissionData) => {
    return await permissionRepository.update(id, permissionData);
}

const deletePermission = async (id) => {
    return await permissionRepository.delete(id);
}


module.exports =
{
    createPermission,
    getPermissions,
    getPermission,
    updatePermission,
    deletePermission
};