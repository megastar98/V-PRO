const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    school_id:{
        type:String,
        required:true
    },
    parent_id:{
        type:String,
        required:true
    },
    class_id:{
        type:String,
        required:true
    },
    DOB: {
        type:String,
        required:false
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    photo:{
        type:Object,
        required:false,
    }
});

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;