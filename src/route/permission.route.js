const express = require('express');
const { permissionController } = require('../controller');
const { authorize } = require('../middleware/authorize.middleware');
const { permissions } = require('../middleware/permission.middleware')

const router = express.Router();
router.route("/")
    .post(permissionController.createPermission)
    .get(authorize, permissions(['view-permission']), permissionController.getPermissions)
router.route('/:id')
    .get(permissionController.getPermission)
    .patch(permissionController.updatePermission)
    .delete(permissionController.deletePermission);

module.exports = router;