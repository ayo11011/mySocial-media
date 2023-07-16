const express = require('express')
const router = express.Router()
const {createPost} = require('../controllers/postControllers')


router.post('/create-post/:user_id', createPost)

module.exports = router