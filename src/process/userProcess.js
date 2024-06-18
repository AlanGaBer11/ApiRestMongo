const userService = require('../services/userService');

const getAllUsers = async() => {
    const users = await userService.getAllUsers();
    return users;
};

const getOneUser = async(id) => {
    const users = await userService.getOneUser(id);
    return users;
};

const createNewUser = async(id, nombre, apellidos) => {
    const users = await userService.createNewUser(id, nombre, apellidos);
    return users;
};

const updateOneUser = async(id, nombre, apellidos) => {
    const users = await userService.updateOneUser(id, nombre, apellidos);
    return users;
};

const deleteOneUser  = async(id) => {
    const users = await userService.deleteOneUser(id);
    return users;
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}