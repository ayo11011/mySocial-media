const express = require('express');
const router = express.Router()
const createComment = require('../controllers/commentControllers')
router.post('/createComment/:post_id/:user_id', createComment )



module.exports = router