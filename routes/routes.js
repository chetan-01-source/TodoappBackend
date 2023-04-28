const express= require('express')
const mongodb=require('mongodb')
const user = require('../modal/userSchema');
const { default: mongoose } = require('mongoose');
const route = express.Router()



route.post('/addtask', async ( req, res) => {

    const{taskname,time}= req.body;

        const newuser= new user ({
            
            taskname:req.body.taskname,
            time:req.body.time
           
        })

        await newuser.save()

        res.send("task  and time added successfully")

    


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

route.delete('/:id', async(req, res) =>{
  console.log(req.params.id)
  const data= await user();
  const result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
  res.send(result)

})

module.exports = route