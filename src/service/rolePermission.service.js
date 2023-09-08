const { RolePermission } = require('../model')
const appDataSource = require('../config/dbConnection.config')
const { getRole } = require('./role.service')

const rolePermissionRepository = appDataSource.getRepository(RolePermission)

const assignRoleToPermission = async (roleId, rolePermissionData = []) => {
    rolePermissionData.map(async (permission) => {
        const result = rolePermissionRepository.create({
            roleId: roleId,
            permissionId: permission.id
        })
        await rolePermissionRepository.save(result);
    })
    return await getRole(roleId);
}
const getRolesPermissions = async () => {
    return await rolePermissionRepository.find({
        tableName: "rolePermission",
        relations: ['permission']
    });
}

const getRolePermission = async (id) => {
    return await rolePermissionRepository.findOne({
        where: { id: id },
        tableName: "rolePermission",
        relations: ['permission']
    });
}

module.exports =
{
    assignRoleToPermission,
    getRolesPermissions,
    getRolePermission
};