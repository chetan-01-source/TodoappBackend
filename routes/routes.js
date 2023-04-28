const express= require('express')
const mongodb=require('mongodb')
const user = require('../modal/userSchema');
const { default: mongoose } = require('mongoose');
const userSchema = require('../modal/userSchema');
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

route.delete('/del/:id',(req,res,next)=>{
  User.findOneAndRemove({_id:req.params.id})
  .then(result=>{
    res.status(200).json({
      message:"product deleted",
      result:result
    })
  })
  .catch(err=>{
    res.status(500).json({
      error:err
    })
  })
}
)

module.exports = route