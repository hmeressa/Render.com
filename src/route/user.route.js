const express = require('express');
const { userController } = require('../controller');
const { createUser, getUser } = require('../validation');
const { validationMiddleware } = require('../middleware')
const validate = require('../utils/validate.utils')

const router = express.Router();
router.route("/")
    .post(userController.createUser)
    .get(userController.getUsers)
router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;