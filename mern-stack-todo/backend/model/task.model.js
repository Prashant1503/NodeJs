const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    strDate : {
        type : Date,
        required : true
    },
    dueDate : {
        type : Date,
        required : true
    },
    status : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Task',taskSchema);