const router = require("express").Router();
const mongoose = require("mongoose");
const CostItem = require("../models/CostItem.model")

router.get("/costItems", (req, res, next) => {
    console.log('This is get costs items', req.payload)
    CostItem.find({createdBy: req.payload._id})
        .then((costItems) => {
            res.status(200).json(costItems)
        })
        .catch((error) => {
            next(error)
        })
})

router.get("/costItems/:costItemId", (req, res, next) => {
    const {costItemId} = req.params
    
    CostItem.findById(costItemId)
        .then((costItemFromDB) => {
            res.status(200).json(costItemFromDB)
        })
        .catch((error) => {
            next(error)
        })
})

router.post("/costItems", (req, res, next) => {
    const {nameVendor, price, description, typeOfCost } = req.body

    console.log('This is post cost Items',req.payload)
    const newCostItemDetails = {
        nameVendor,
        price,
        description,
        typeOfCost
    }

    CostItem.create({...newCostItemDetails, createdBy: req.payload._id })
        .then(() => {
            res.status(201).send("CostItem was created")
        })
        .catch((error) => {
            next(error)
        }) 
})

router.put("/costItems/:costItemId", (req, res, next) => {
    const {costItemId} = req.params

    const {nameVendor, price, description, typeOfCost} = req.body

    const updatedCostItemDetails = {
        nameVendor,
        price,
        description,
        typeOfCost,
    }

    CostItem.findByIdAndUpdate(costItemId, {...updatedCostItemDetails, createdBy: req.payload._id }, {new: true})
        .then(() => {
            res.status(200).send("CostItem is updated")
        })
        .catch((error) => {
            next(error)
        })
})

router.delete("/costItems/:costItemId", (req, res, next) => {
    const {costItemId} = req.params
    console.log(costItemId)

    CostItem.findByIdAndDelete(costItemId)
        .then(() => {
            res.status(204).send("CostItem was deleted")
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router