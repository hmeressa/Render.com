const express = require('express');
const { rolePermissionController } = require('../controller');

const router = express.Router();
router.route("/:id")
    .post(rolePermissionController.assignRoleToPermission)
    .get(rolePermissionController.getRolePermission);
router.route("/")
    .get(rolePermissionController.getRolesPermissions);

module.exports = router;