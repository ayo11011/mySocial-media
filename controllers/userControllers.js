const  { registerMessage, loginMessage} = require('../constants/messages')

const createUser =(req, res) => {
    // Create user
    res.status(200).json({
        status: true,
        message: registerMessage 
    })
};

const userLogin = () => {
    // Login user
    res.status(200).json({
        status: true,
        message: loginMessage
    })
};

module.exports = {
    createUser,
    userLogin,
}