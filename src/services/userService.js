const userDB = require('../database/userDB');

const getAllUsers = async() => {
    const users = await userDB.getAllUsers();
    return users;
};

const getOneUser = async(id) => {
    const users = await userDB.getOneUser(id);
    return users;
};

const createNewUser = async(id, nombre, apellidos) => {
    const users = await userDB.createNewUser(id, nombre, apellidos);
    return users;
};

const updateOneUser = async(id, nombre, apellidos) => {
    const users = await userDB.updateOneUser(id, nombre, apellidos);
    return users;
};

const deleteOneUser  = async(id) => {
    const users = await userDB.deleteOneUser(id);
    return users;
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}