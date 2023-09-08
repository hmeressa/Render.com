const { RolePermission } = require('../model')
const appDataSource = require('../config/dbConnection.config')
const rolePermissionRepository = appDataSource.getRepository(RolePermission)
const assignRoleToPermission = async (rolePermissionData) => {
    const result = rolePermissionRepository.create(rolePermissionData);
    return await rolePermissionData.save(result);
}
const getRolesPermissions = async () => {
    return await rolePermissionRepository.find();
}

const getRolePermission = async (id) => {
    return await rolePermissionRepository.findOne({ where: { id: id } });
}

module.exports =
{
    assignRoleToPermission,
    getRolesPermissions,
    getRolePermission
};