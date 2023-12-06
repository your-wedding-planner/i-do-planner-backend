const router = require("express").Router();
const mongoose = require("mongoose");
const Vendor = require("../models/Vendor.model")

router.get("/vendors", (req, res, next) => {
    Vendor.find()
        .then((vendors) => {
            res.json(vendors)
        })
        .catch((error) => {
            next(error)
        })
})

router.get("/vendors/:vendorId", (req, res, next) => {
    const {vendorId} = req.params
    
    Vendor.findById(vendorId)
        .then((vendorFromDB) => {
            res.json(vendorFromDB)
        })
        .catch((error) => {
            next(error)
        })
})

router.post("/vendors", (req, res, next) => {
    const {name, location, description, URL, typeOfService, email, phoneNumber } = req.body

    const newVendorDetails = {
        name, 
        location,
        description,
        URL,
        typeOfService,
        email,
        phoneNumber
    }

    Vendor.create(newVendorDetails)
        .then(() => {
            res.status(201).send("Vendor was created")
        })
        .catch((error) => {
            next(error)
        })
})

router.put("/vendors/:vendorId", (req, res, next) => {
    const {vendorId} = req.params

    const {name, location, description, URL, typeOfService, email, phoneNumber } = req.body

    const updatedVendorDetails = {
        name, 
        location,
        description,
        URL,
        typeOfService,
        email,
        phoneNumber
    }

    Vendor.findByIdAndUpdate(vendorId, updatedVendorDetails, {new: true})
        .then(() => {
            res.send("Vendor is updated")
            //also send a status?
        })
        .catch((error) => {
            next(error)
        })        
})

router.delete("/vendors/:vendorId", (req, res, next) => {
    const {vendorId} = req.params
    
    Vendor.findByIdAndDelete(vendorId)
        .then(() => {
            res.send("Vendor was deleted")
        })
        .catch((error) => {
            next(error)
        })
})   

module.exports = router