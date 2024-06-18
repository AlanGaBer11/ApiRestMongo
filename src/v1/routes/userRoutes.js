const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getOneUser)
    .post('/', userController.createNewUser)
    .patch('/:id', userController.updateOneUser)
    .delete('/:id', userController.deleteOneUser)

module.exports = router;
