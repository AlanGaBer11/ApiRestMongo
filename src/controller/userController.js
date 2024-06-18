const userProcess = require('../process/userProcess');

const getAllUsers = async (req, res) => {
    const users = await userProcess.getAllUsers();
    res.send(users);
};

const getOneUser = async (req, res) => {
    const users = await userProcess.getOneUser(req.params.id);
    res.send(users);
};

const createNewUser = async (req, res) => {
    const users = await userProcess.createNewUser(req.body.id, req.body.nombre, req.body.apellidos);
    res.send(users);
};

const updateOneUser = async (req, res) => {
    const users = await userProcess.updateOneUser(req.body.id, req.body.nombre, req.body.apellidos);
    res.send(users);
};

const deleteOneUser = async (req, res) => {
    const users = await userProcess.deleteOneUser(req.params.id);
    res.send(users);
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};
