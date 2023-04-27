const express = require("express")
const app = express()
const authroutes = require('./routes/routes')
const cors = require("cors")


app.use(express.json())
app.use(cors({origin:"*"}))
require('./database/connection')
require('./modal/userSchema')

app.use('/', authroutes)

const corsOptions = {
  origin:"http://localhost:3000/"
}


app.listen(5000 , ()=> {
    console.log('Server is running on port 5000')
})






