const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db")


const Post = sequelize.define('post',{
 id :{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    allowNull: false,
 },
 post_id :{
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
 },
 
 user_id :{
    type : DataTypes.UUID,
    allowNull: false,
    primaryKey: true
 },
 post: {
    type: DataTypes.TEXT,
    allowNull: false,
 }
})

Post.sync()
.then(()=>{
    console.log('Post table created')
});

module.exports = Post
