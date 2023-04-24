const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nodeproject:nodeproject@cluster1.8flljbk.mongodb.net/Userdata?retryWrites=true&w=majority')
.then(()=> console.log('connected to db'))
.catch((error) => console.log("error :", error))

module.exports = mongoose