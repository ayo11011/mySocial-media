require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT
const displayRoutes = require('express-routemap');
const userRoutes = require('./routes/userRoutes')
const { notFoundMessage } = require('./constants/messages')


app.use('/api/v1/user', userRoutes)

app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  displayRoutes(app);
})
    
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: notFoundMessage
     })

})