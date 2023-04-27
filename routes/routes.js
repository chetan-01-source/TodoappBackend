const express= require('express')
const user = require('../modal/userSchema');
const { default: mongoose } = require('mongoose');
const route = express.Router()



route.post('/addtask', async ( req, res) => {

    const{taskname}= req.body;

        const newuser= new user ({
            
            taskname:req.body.taskname
           
        })

        await newuser.save()

        res.send("task added successfully")
    


} )

const User = mongoose.model("Usercollection");

route.get('/gettask', async(req, res) => {
  try{

    const alluser = await User.find({});
    res.send(alluser);
    
  } 
  
  catch (error){
    console.log(error);

  }
})



module.exports = route