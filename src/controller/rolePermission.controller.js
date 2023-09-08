const { rolePermissionService } = require('../service')
const ErrorApi = require('../handler')

const assignRoleToPermission = async (req, res, next) => {
    const result = await rolePermissionService.assignRoleToPermission(req.body);
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