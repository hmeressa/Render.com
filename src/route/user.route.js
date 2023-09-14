const express = require('express');
const { userController } = require('../controller');
const { authorize } = require('../middleware/authorize.middleware');
const { permissions } = require('../middleware/permission.middleware')
const router = express.Router();

router.route("/")
    .post(authorize, permissions(['create-user', 'update-user', 'view-user']), userController.createUser)
    .get(authorize, permissions(['create-user', 'update-user']), userController.getUsers)

router.route('/:id')
    .get(authorize, permissions(['create-user', 'update-user']), userController.getUser)
    .patch(authorize, userController.updateUser)
    .delete(authorize, userController.deleteUser);


module.exports = router;