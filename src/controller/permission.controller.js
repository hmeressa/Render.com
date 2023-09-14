const { permissionService } = require('../service')
const { ErrorApi } = require("../handler/error.handler");

const createPermission = async (req, res, next) => {
    const result = await permissionService.createPermission(req.body);
    res.send(result);
}
const getPermissions = async (req, res, next) => {
    const result = await permissionService.getPermissions();
    res.send(result);
}

const getPermission = async (req, res, next) => {
    const result = await permissionService.getPermission(req.params.id)
    if (!result) {
        throw new ErrorApi("Permission Not Found", 404)
    }
    res.send(result);
}

const updatePermission = async (req, res, next) => {
    const result = await permissionService(req.params.id, req.body);
    res.send(result)
}

const deletePermission = async (req, res, next) => {
    const result = await permissionService.deletePermission(req.params.id);
    if (result.affected != 1) {
        throw new ErrorApi("Permission not Deleted", 404)
    }
    res.send(result)
}
module.exports =
{
    createPermission,
    getPermissions,
    getPermission,
    updatePermission,
    deletePermission
};