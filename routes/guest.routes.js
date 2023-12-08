const router = require("express").Router();
const mongoose = require("mongoose");
const Guest = require('../models/Guest.model');

router.get("/guests", (req, res, next) => {
    Guest.find()
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
    const { firstName, lastName, age, email, phoneNumber, notes, attending } = req.body;
    const newRequestBody = {
      firstName,
      lastName,
      age,
      email,
      phoneNumber,
      notes,
      attending
    }
  
    Guest.create(newRequestBody)
      .then(() => {
        res.status(201).json("Guest was created")
      })
      .catch((error) => {
        next(error)
      })
  })


  router.put("/guests/:guestId", (req, res, next) => {
    const {guestId} = req.params;
    const { firstName, lastName, age, email, phoneNumber, notes, attending } = req.body;
    const newRequestBody = {
      firstName,
      lastName,
      age,
      email,
      phoneNumber,
      notes,
      attending
    }
    
      Guest.findByIdAndUpdate(guestId,newRequestBody,{new:true})
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