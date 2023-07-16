require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT
const displayRoutes = require('express-routemap');
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const { notFoundMessage } = require('./constants/messages')
const sequelize = require('./config/db')
const commentRoutes = require('./routes/commentRoutes')



app.use(bodyParser.json())
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/comment', commentRoutes);


sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.')
   app.listen(port, () => {
    displayRoutes(app);
    })
})
.catch(err => console.log('Error:' + err))


    const dbConnection = () =>{
        return sequelize.authenticate()
    }

    
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: notFoundMessage
     })

})