const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    nickname:{
        type: String,
        required:false
    },
    school_id:{
        type: String,
        required:true
    },
    tuition1: { // first term tuition
        type:String,
        required:false,
        default:''
    },
    tuition2: { // second term tuition
        type:String,
        required:false,
        default:''
    },
    tuition3: { // third term tuition
        type:String,
        required:false,
        default:''
    }
});

const Class = mongoose.model('Class',ClassSchema);
module.exports = Class;
