const mongoose = require("mongoose");

//create a table to store quotes in
const BoilerPlateSchema = new mongoose.Schema({

    field1: {
        type: String,
        required: [true, "Field 1 is required tho'"],
        maxLength: [1000, "Thats too long"],
        minLength: [3, "That is too short"]
    },
    field2: {
        type: String,
        required: [true, "what is field 2? we needdzzz to know!"]
    },

    //this one is optional b/c there is not required validation key
    optionalField: {
        type: Date
    },

}, {timestamps:true} )

const BoilerPlate = mongoose.model("BoilerPlate", BoilerPlateSchema );

module.exports = BoilerPlate;