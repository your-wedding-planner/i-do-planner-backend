const router = require("express").Router();
const Guest = require('../models/Guest.model');

router.get("/guests", (req, res, next) => {
  console.log('This is get guests', req.payload)
    Guest.find({createdBy: req.payload._id})
    .populate("seatingTable")
      .then((guestsArr) => {
        res.status(200).json(guestsArr)
      })
      .catch((error) => {
        next(error)
      })
  })

  router.get("/guests/:guestId", (req, res, next) => {
    const { guestId } = req.params;
    Guest.findById(guestId)
      .then((guestDetails) => {
        res.status(200).json(guestDetails)
      })
      .catch((error) => {
        next(error)
      })
  })

  router.post("/guests", (req, res, next) => {
    const { firstName, lastName, age, email, phoneNumber, notes, attending, seatingTable } = req.body;
    
    const newRequestBody = {
      firstName,
      lastName,
      age,
      email,
      phoneNumber,
      notes,
      attending,
      seatingTable,
    }
  
    Guest.create({...newRequestBody, createdBy: req.payload._id })
      .then((createdGuest) => {
        res.status(201).json(createdGuest)
      })
      .catch((error) => {
        next(error)
      })
  })


  router.put("/guests/:guestId", (req, res, next) => {
    const {guestId} = req.params;
    const { firstName, lastName, age, email, phoneNumber, notes, attending, seatingTable } = req.body;
    const newRequestBody = {
      firstName,
      lastName,
      age,
      email,
      phoneNumber,
      notes,
      attending,
      seatingTable,
    }
    
      Guest.findByIdAndUpdate(guestId,{...newRequestBody, createdBy: req.payload._id },{new:true})
        .then((updatedGuest) => {
          res.status(200).json(updatedGuest)
        })
        .catch((error) => {
          next(error)
        });
    });

    router.delete("/guests/:guestId", (req, res, next) => {
        const {guestId} = req.params;
        Guest.findByIdAndDelete(guestId)
          .then(() => {
            res.status(204).send()
          })
          .catch((error) => {
            next(error)
          });
      });
      
      module.exports = router;