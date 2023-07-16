const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db")

const User = sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    surname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    othernames: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    phone:{
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female'],
        allowNull: false
    },
    occupation: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    about_me: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // passwword_hash: {
    //     type: DataTypes.TEXT,
    //     allowNull: false
    // },
    // password_Salt: {
    //     type: DataTypes.TEXT,
    //     allowNull: false
    // },

})

User.sync()
.then(()=>{
    console.log('User table created')
})


module.exports = User;
