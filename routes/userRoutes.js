const express = require('express')
const router = express.Router()
const { createUser, getUserInfo } = require('../controllers/userControllers')


//create user routes
router.post('/register', createUser) 
router.get('/getaUser/:user_id', getUserInfo)
router.get('/getAllUsers' ,getUserInfo) 
// router.post('/login', userLogin)

module.exports = router