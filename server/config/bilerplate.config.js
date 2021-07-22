const mongoose = require("mongoose");
const db_name = "boilerplate_july_db";

mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Established a connection to the database!!! Letss get it!"))
    
    .catch((err)=>console.log("something went wrong, here is the error", err))