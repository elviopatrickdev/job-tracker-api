import User from "../models/User.js";

// CREATE
export const createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
        user,
        message: "Utilizador criado com sucesso!"
    });
};

// READ ALL
export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        users,
        message: "Leitura de todos os utilizadores feita com sucesso!"
    });
};

// READ ONE 
export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
        user,
        message: "Leitura do utilizador feita com sucesso!"
    });
};

// UPDATE
export const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
    res.status(200).json({
        updatedUser,
        message: "Utilizador atualizado com sucesso!"
    });
};

// DELETE
export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: "Utilizador deletado com sucesso!"
    });
};