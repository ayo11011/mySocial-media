const PostModels = require ('../models/postModels');
const userModels = require ('../models/userModels');
const {Op} = require('sequelize')
const {v4:uuidv4} = require('uuid')
const validateCreatePost = require('../validations/postValidations')






const createPost = async (req, res) => {
    
    // const {user_id }= req.params
    const user_id = req.params.user_id
    const {error} = validateCreatePost(req.body)
   
    try {
        // if(error !== undefined){
        //     return res.status(400).json({message: error.message});
        // }
        if(error !== undefined)throw new Error(error.details[0].message, 400);

        const userExistence = await checkIfUserExists (user_id)
        // if(!userExistence ||user_id !== userExistence.user_id){
        //             return res.status(400).json({
        //                 status: false,
        //                 message: 'User does not exist'})
                    
        //         }
        if(!userExistence ||user_id !== userExistence.user_id)throw new Error('User does not exist', 400)
        
        const postId = uuidv4()
        const {post} = req.body;
        const newPost = await PostModels.create({
            post_id: postId,
            user_id: user_id,
            post: post
        
            
        });
        res.status(201).json({
            status: true,
            message: 'Post created successfully',
            
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

const checkIfUserExists =  (user_id) => {
    return userModels.findOne({
        where: {
            user_id: user_id
        }
    })
 }


module.exports = {
    createPost,
    checkIfUserExists
}