const { roleService } = require('../service')
const ErrorApi = require('../handler')

const createRole = async (req, res, next) => {
    const result = await roleService.createRole(req.body);
    res.send(result);
}
const getRoles = async (req, res, next) => {
    const result = await roleService.getRoles();
    res.send(result);
}

const getRole = async (req, res, next) => {
    const result = await roleService.getUser(req.params.id)
    if (!result) {
        throw new ErrorApi("Role Not Found", 404)
    }
    res.send(result);
}

const updateRole = async (req, res, next) => {
    const result = await roleService.updateRole(req.params.id, req.body);
    res.send(result)
}

const deleteRole = async (req, res, next) => {
    const result = await roleService.deleteUser(req.params.id);
    if (result.affected != 1) {
        throw new ErrorApi("Role not Deleted", 404)
    }
    res.send(result)
}
module.exports =
{
    createRole,
    getRoles,
    getRole,
    updateRole,
    deleteRole
};