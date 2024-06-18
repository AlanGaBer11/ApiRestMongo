const mongoose = require('mongoose');

const dbconnection = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect("mongodb://127.0.0.1:27017/userDB", {});
        console.log("Conexión exitosa");
    } catch (error) {
        console.error("Error de conexión", error);
    }
};

const userSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true }
});

const user = mongoose.model('user', userSchema);

// GETALL
const getAllUsers = async () => {
    try {
        const users = await user.find({});
        return users;
    } catch (error) {
        throw error;
    }
};

// GETONE
const getOneUser = async (id) => {
    try {
        const foundUser = await user.findOne({ id });
        return foundUser;
    } catch (error) {
        throw error;
    }
};

// POST
const createNewUser = async (id, nombre, apellidos) => {
    try {
        const newUser = new user({ id, nombre, apellidos });
        await newUser.save();
        return "Usuario Creado";
    } catch (error) {
        throw error;
    }
};

// PATCH
const updateOneUser = async (id, nombre, apellidos) => {
    try {
        await user.findOneAndUpdate({ id }, { nombre, apellidos });
        return "Usuario Actualizado";
    } catch (error) {
        throw error;
    }
};

const deleteOneUser = async (id) => {
    try {
        await user.findOneAndDelete({ id });
        return "Usuario eliminado";
    } catch (error) {
        throw error;
    }
};

module.exports = {
    dbconnection,
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};
