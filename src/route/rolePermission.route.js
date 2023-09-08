const express = require('express');
const { rolePermissionController } = require('../controller');

const router = express.Router();
router.route("/")
    .post(rolePermissionController.assignRoleToPermission)
    .get(rolePermissionController.getRolesPermissions)
router.route('/:id')
    .get(rolePermissionController.getRolePermission);
module.exports = router;