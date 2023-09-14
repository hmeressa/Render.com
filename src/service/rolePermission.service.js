const { RolePermission, Role } = require('../model')
const appDataSource = require('../config/dbConnection.config')

const rolePermissionRepository = appDataSource.getRepository(RolePermission);

const assignRoleToPermission = async (roleId, permissions = []) => {

    const result = permissions.map((permissionId) => {
        const assignedPermissions = rolePermissionRepository.create({
            roleId: roleId,
            permissionId: permissionId
        });
        return assignedPermissions;
    });

    return await rolePermissionRepository.save(result);
}
const getRolesPermissions = async () => {
    return await rolePermissionRepository.find({
        tableName: "rolePermissions",
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