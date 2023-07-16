const  { registerMessage, loginMessage} = require('../constants/messages')
const UserModel = require('../models/userModels')
const validateCreateAccount = require('../validations/userValidations')
const {Op} = require('sequelize')
const {v4:uuidv4} = require('uuid') 



const createUser = async (req, res) => {
const { surname, password, othernames, username, email, phone, gender, occupation, about_me } = req.body
const {error} = validateCreateAccount(req.body)
// if(error !== undefined) {
//     res.status(400).json({
//             status: false,
//             message: error.details[0].message || "Bad request",
//         })
//         return
// }
   
try {
    if(error !== undefined)throw new Error(error.details[0].message || "Bad request", 400)

    
    const checkIfUserExists = await UserModel.findAll({
                 attributes: ['email'],
                 where: {
                      [Op.or]: [
                        {email: email}
                      ]
                                      
                  }
    })
       if(checkIfUserExists.length > 0)throw new Error("user already Exists", 400)
    // if(checkIfUserExists.length > 0) {
    // res.status(400).json({
    //         status: false,
    //         message: "user already Exists"
    //     })
    //     return
    // }
    
//   const { hash, salt } = await hashPassword(password)
   console.log(req.body)
  const userID = uuidv4()
  console.log(userID)
        await UserModel.create({
            user_id: userID,
            surname: surname,
            othernames: othernames,
            username: username,
            occupation: occupation,
            about_me: about_me,
            email: email,
            phone: phone,
            gender: gender,
            password: password,
            // password_hash: hash,
            // password_salt : salt
            
        })
        res.status(201).json({
            status: true,
            message: "register successfully"
        })
        }catch(error){
            res.status(500).json({
                status: false,
                message: error.message||"internal server error"
            })
        }
    }

    const getUserInfo = async (req, res) => {
        const {user_id} = req.params
        try{
            if(!user_id)throw new Error(invalidInformation, 400)
            const userInfo = await UserModel.findOne({
                attributes: ["surname","password","othernames","username","email","phone","gender","occupation", "about_meil"],
                where: {user_id: user.id}
            })
            if(!userInfo)throw new Error(internalError, 400)
            res.status(200).json({
                status: true,
                message: userDetails.message,
                data: userInfo
            })

        }catch(error){
            res.json({
                status: false,
                message: error.message||"internal server error"
            })
        }
    }
               


module.exports = {
    createUser,
    getUserInfo
}