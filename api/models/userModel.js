const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema (
    {
        username : {
            type: String,
            required: [true, 'Please tell us your name!'],
            unique: true,
        },
        email : {
            type: String,
            required: [true, 'Please tell us your email!'],
            unique: true,
        },
        country : {
            type: String,
            required: true, 
        },
        img : {
            type: String, 
        },
        city : {
            type: String,   
        },
        phone : {
            type: String,  
            required: true 
        },
        password : {
                type: String, 
                required: true,  
        },
        isAdmin : {
                type: Boolean,  
                default: false,
            
        },
    },
    {
        timestamps: true
    }
);
const User = mongoose.model("User",  UserSchema);
module.exports = User;