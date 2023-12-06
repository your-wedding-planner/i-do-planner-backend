const router = require("express").Router();
const mongoose = require("mongoose");
const Vendor = require("../models/Vendor.model")

router.get("/vendors", (req, res, next) => {
    Vendor.find()
        .then((vendors) => {
            res.json(vendors)
        })
        .catch((err) => {
            console.log("Error in getting vendors from DB...", err)
            // next(err) --> errorhandling middleware
        })
})

router.get("/vendors/:vendorId", (req, res, next) => {
    const {vendorId} = req.params
    
    Vendor.findById(vendorId)
        .then((vendorFromDB) => {
            res.json(vendorFromDB)
        })
        .catch((err) => {
            console.log("Error in getting a specific vendor from DB...", err)
            // next(err) --> errorhandling middleware
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
        .catch((err) => {
            console.log("Error in creating a vendor in DB...", err)
            // next(err) --> errorhandling middleware
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
        .catch((err) => {
            console.log("Error in updating a vendor in DB...", err)
            // next(err) --> errorhandling middleware
        })
        
})

router.delete("/vendors/:vendorId", (req, res, next) => {
    const {vendorId} = req.params
    
    Vendor.findByIdAndDelete(vendorId)
        .then(() => {
            res.send("Vendor was deleted")
        })
        .catch((err) => {
            console.log("Error in deleting a vendor in DB...", err)
            // next(err) --> errorhandling middleware
        })
})   

module.exports = router