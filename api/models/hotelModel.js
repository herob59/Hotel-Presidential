const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema (
    {
        name : {
            type: String,
            required: true,
            
            },
        type : {
            type: String,
            required: true,
             },
        country : {
            type: String,
            },
        address: {
            type: String, 
            required: true,
             },
        city : {
            type: String,   
            },
        distance : {
            type: String,  
              },
        photos : {
                type: [String], 
                required: true,  
             },
        dec : {
                type: Boolean,  
                default: true,
            },
        rating : {
                type: Number,  
                min : 0,
                max : 5    
            },
         rooms : {
                type: [String],  
            },
         cheapestPrice : {
                type: Number,  
                required: true,
            },
        featured : {
                type: Boolean,  
                default: false,
            },
         },
    {
        timestamps: true
    }
);

const Hotel = mongoose.model("Hotel",  HotelSchema);
module.exports = Hotel;