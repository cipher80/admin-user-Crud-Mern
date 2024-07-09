const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Admin = sequelize.define('Admin', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Synchronize the Admin model with the database
Admin.sync()
    .then(() => console.log('Admin table created or updated'))
    .catch(err => console.log('Error: ' + err));

module.exports = Admin;
