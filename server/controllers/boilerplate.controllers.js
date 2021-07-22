const BoilerPlate = require("../models/boilerplate.models");


module.exports.findAllBoilerPlates = (req,res)=>{
    BoilerPlate.find()
        .then(allBoilerPlates => {
            res.json({results: allBoilerPlates})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong getting all the BoilerPlates", error: err}
                )
        })
}



module.exports.createBoilerPlate = (req,res)=>{
    BoilerPlate.create(req.body)
        .then(newlyCreatedBoilerPlate=>{
            res.json({results: newlyCreatedBoilerPlate})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong creating a new BoilerPlate", error: err}
                )
        })
}

module.exports.findOneBoilerPlate = (req, res)=>{
    BoilerPlate.findOne({_id:req.params.BoilerPlateId})
        .then(foundBoilerPlate =>{
            res.json({results: foundBoilerPlate})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong finding one BoilerPlate", error: err}
                )
        })
}


module.exports.updateBoilerPlate = (req, res)=>{
   
    BoilerPlate.findOneAndUpdate(
        {_id: req.params.BoilerPlateId},  //req.params.BoilerPlateId will represent the id of the BoilerPlate that I want to update
        req.body,
        //req.body will represent the information i want to update the BoilerPlate with 
        {new:true, runValidators:true}
        )
        .then(updatedBoilerPlate => res.json({results: updatedBoilerPlate}))
        .catch(err => {
            res.json(
                {message: "something went wrong updating one BoilerPlate", error: err}
                )
        })
}


module.exports.deleteBoilerPlate = (req, res)=>{
    BoilerPlate.deleteOne({_id: req.params.BoilerPlateId})
        .then(deletedBoilerPlate=> res.json({results: deletedBoilerPlate}))
        .catch(err => {
            res.json(
                {message: "something went wrong deleting one BoilerPlate", error: err}
                )
        })
}