const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date: {
    type: String, // Example: "2025-08-02"
    required: true,
    match: /^\d{4}-\d{2}-\d{2}$/, // Optional: enforces YYYY-MM-DD format
  },
  status: {
    type: Boolean, 
    required: true,
  },
},{timestamps:true})

AttendanceSchema.index({name:1,date:1},{unique:true})

//To Speed up search indexing is used here
AttendanceSchema.index({ date: 1 })


module.exports = mongoose.model("attendance",AttendanceSchema)