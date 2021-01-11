var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// user-Schema 
var UserSchema = new Schema({
    role : {
        type : String
    },
    email : {type : String,required : true,unique : true},
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    teamName : {
        type : String
    },
    contactNumber: {type: Number, required: true},
    department: {type : String},
    Skills: [String],
    designation: String,
    dateAdded: {type: Date}
});

// moduule.exports 
module.exports = User = mongoose.model("User",UserSchema);