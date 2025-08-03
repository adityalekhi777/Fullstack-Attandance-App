require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

const route = require('./routes/AttendanceRoutes')


app.use(express.json())
app.use(cors());

app.use('/api/attendance',route)

app.get('/',(req,res)=>{
    res.json({"user":"Aditya"})
})


mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    app.listen(process.env.PORT,()=>{
    console.log("Server is running on Port: "+process.env.PORT)
})

})
.catch((err)=>{
    console.log(err)
})



