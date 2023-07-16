const { sequelize } = require('../config/db')
const { DataTypes } = require('sequelize')


const comment = sequelize.define('reaction',{
   id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    unique:true,
    allowNull:false,
   },
post_id:{
    type:DataTypes.UUID,
    allowNull:false,
},
user_id:{
    type:DataTypes.UUID,
    allowNull:false,
    primaryKey:true
},
reaction_id:{
    type:DataTypes.ENUM,
    value: [like, dislike, love, funny]
},
})
module.exports = reaction