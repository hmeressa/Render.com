const express = require('express');
const { userController } = require('../controller');
const { authorize } = require('../middleware/authorize.middleware');
const { permissions } = require('../middleware/permission.middleware')
const router = express.Router();

router.route("/")
    .post(userController.createUser)
    .get(authorize, userController.getUsers)

router.route('/:id')
    .get(authorize, permissions(['view-user']), userController.getUser)
    .patch(authorize, permissions(['update-user']), userController.updateUser)
    .delete(authorize, permissions(['delete-user']), userController.deleteUser);

module.exports = router;