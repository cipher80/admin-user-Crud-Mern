const User = require('../models/User');

exports.addUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        const user = await User.create({ name, email, phone, password });

        res.status(201).json({ message: 'User added successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, password } = req.body;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        user.password = password || user.password;

        await user.save();

        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

exports.getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
};

exports.getListUser = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};
