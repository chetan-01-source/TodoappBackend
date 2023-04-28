const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    taskname :{
        type: String,
        required: true
    },

    time :{
        type: String,
        required: true
    }

    
})

module.exports = mongoose.model('Usercollection', userSchema)