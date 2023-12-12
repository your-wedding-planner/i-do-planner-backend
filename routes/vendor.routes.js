const router = require("express").Router();
const mongoose = require("mongoose");
const Vendor = require("../models/Vendor.model")

router.get("/vendors", (req, res, next) => {
    Vendor.find({createdBy: req.payload._id})
        .then((vendors) => {
            res.status(200).json(vendors)
        })
        .catch((error) => {
            next(error)
        })
})

router.get("/vendors/:vendorId", (req, res, next) => {
    const {vendorId} = req.params
    
    Vendor.findById(vendorId)
        .then((vendorFromDB) => {
            res.status(200).json(vendorFromDB)
        })
        .catch((error) => {
            next(error)
        })
})

router.post("/vendors", (req, res, next) => {
    const {name, location, description, URL, typeOfService, email, phoneNumber, createdBy } = req.body

    const newVendorDetails = {
        name, 
        location,
        description,
        URL,
        typeOfService,
        email,
        phoneNumber,
        createdBy
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

    const {name, location, description, URL, typeOfService, email, phoneNumber, createdBy } = req.body

    const updatedVendorDetails = {
        name, 
        location,
        description,
        URL,
        typeOfService,
        email,
        phoneNumber,
        createdBy
    }

    Vendor.findByIdAndUpdate(vendorId, updatedVendorDetails, {new: true})
        .then(() => {
            res.status(200).send("Vendor is updated")
        })
        .catch((error) => {
            next(error)
        })        
})

router.delete("/vendors/:vendorId", (req, res, next) => {
    const {vendorId} = req.params
    
    Vendor.findByIdAndDelete(vendorId)
        .then(() => {
            res.status(204).send("Vendor was deleted")
        })
        .catch((error) => {
            next(error)
        })
})   

module.exports = router