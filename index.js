const express = require("express")
const app = express()
const authroutes = require('./routes/routes')


app.use(express.json())
require('./database/connection')
require('./modal/userSchema')

app.use('/', authroutes)



app.listen(5000 , ()=> {
    console.log('Server is running on port 5000')
})