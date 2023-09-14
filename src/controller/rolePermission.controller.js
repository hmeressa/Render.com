const { rolePermissionService } = require('../service')
const { ErrorApi } = require("../handler/error.handler");

const assignRoleToPermission = async (req, res, next) => {
    const permissions = req.body.permissions;
    const roleId = req.params.id;
    const result = await rolePermissionService.assignRoleToPermission(roleId, permissions);
    res.send(result);
}
const getRolesPermissions = async (req, res, next) => {
    const result = await rolePermissionService.getRolesPermissions();
    res.send(result);
}

const getRolePermission = async (req, res, next) => {
    const result = await rolePermissionService.getRolePermission(req.params.id)
    if (!result) {
        throw new ErrorApi("Role Not Found", 404)
    }
    res.send(result);
}

module.exports =
{
    assignRoleToPermission,
    getRolesPermissions,
    getRolePermission,
};