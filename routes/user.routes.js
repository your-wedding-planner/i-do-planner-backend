const router = require("express").Router();
const User = require('../models/User.model');

router.get("/users", (req, res, next) => {
    User.find()
      .then((userArr) => {
        res.status(200).json(userArr)
      })
      .catch((error) => {
        next(error)
      })
  })

  router.get("/users/:userId", (req, res, next) => {
    const {userId} = req.params
    
    User.findById(userId)
    .then((userDetails) => {
        res.status(200).json(userDetails)
    })
    .catch((error) => {
        next(error)
    })
  })

module.exports = router;