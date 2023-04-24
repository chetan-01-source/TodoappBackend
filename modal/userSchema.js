const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({


    taskname :{
        type: String,
        required: true
    }

    
})

module.exports = mongoose.model('Usercollection', userSchema)