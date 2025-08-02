require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

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



