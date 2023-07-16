const CommentModels = require('../models/CommentModels')
const postModels = require ('../models/postModels');
const {Op} = require('sequelize')
const {v4:uuidv4} = require('uuid')
const validateCreateComment = require('../validations/commentValidations')
const {checkIfUserExists} = require('./postControllers')

const createComment = async (req, res, ) => {
    const {user_id, post_id } = req.params
    const {error} = validateCreateComment(req.body)


try {

    if (error !== undefined)throw new Error(error.details[0].message, 400)

    const userExistence = await checkIfUserExists (user_id)
    const postExistence = await checkIfPostExists (post_id)

    if (!postExistence || post_id !== postExistence.post_id)throw new Error('post does not exist', 400)

    if (!userExistence || user_id !== userExistence.user_id)throw new Error('user does not exist', 400)

    const comment = await CommentModels.create({
        comment_id: uuidv4(),
        user_id: user_id,
        post_id: post_id,
        comment: req.body.comment
        
    })
       res.status(201).json({
        status: false,
        message: 'comment created successfully',
       
       })


    }catch (error){
        res.status(500).json({
            status: false,
            message: error.message,
        })
    }

}
const checkIfPostExists =  (post_id) => {
    return postModels.findOne({
        where: {
            post_id: post_id
        }
    })
 }

module.exports = createComment