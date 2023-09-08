const express = require('express');
const { roleController } = require('../controller');

const router = express.Router();
router.route("/")
    .post(roleController.createRole)
    .get(roleController.getRoles)
router.route('/:id')
    .get(roleController.getRole)
    .patch(roleController.updateRole)
    .delete(roleController.deleteRole);

module.exports = router;