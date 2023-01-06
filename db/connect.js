const mongoose = require('mongoose')
const connectionString = "mongodb+srv://TaskAppUser:lK1UWMU5WqGkACHk@cluster0.u4ul5z1.mongodb.net/taskManagerDatabase?retryWrites=true&w=majority"


const connectDB = (url) =>{
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB

