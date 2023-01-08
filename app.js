const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require("./middleware/not-found")

//middle ware 

//serve static files
app.use(express.static('./public'))

//since we are getting json
app.use(express.json())



//routes

app.use('/api/v1/tasks', tasks)

app.use(notFound)


const port = 3000;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port} ...`))
    }catch (error){
        console.log(error)
    }
}

start()

