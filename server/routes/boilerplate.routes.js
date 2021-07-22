//routes needs to know about the controller
const BoilerPlateController = require("../controllers/boilerplate.controllers");

module.exports = app =>{
    //all quotes
    app.get("/api/boilerPlates", BoilerPlateController.findAllBoilerPlates)

    //create new BoilerPlate
    app.post("/api/boilerPlates/create", BoilerPlateController.createBoilerPlate)

    //get one BoilerPlate by id
    app.get("/api/boilerPlates/:BoilerPlateId", BoilerPlateController.findOneBoilerPlate)

    //update BoilerPlate
    app.put("/api/boilerPlates/:BoilerPlateId", BoilerPlateController.updateBoilerPlate)

    //delete BoilerPlate
    app.delete("/api/boilerPlates/:BoilerPlateId", BoilerPlateController.deleteBoilerPlate)


}