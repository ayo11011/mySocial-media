const { DataTypes } = require('sequelize')
const sequelize  = require('../config/db')

const comment = sequelize.define('comment',{
 id :{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    allowNull: false,
 },
 comment_id :{
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
 },
 post_id :{
    type: DataTypes.UUID,
        allowNull: false,
 },
 comment:{
    type: DataTypes.TEXT,
    allowNull: false,
 },
 user_id :{
    type : DataTypes.UUID,
    allowNull: false,
    primaryKey: true
 },
})
comment.sync();

module.exports = comment