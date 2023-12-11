const router = require("express").Router();
const mongoose = require("mongoose");
const Budget = require("../models/Budget.model")

router.get("/budgets", (req, res, next) => {
    Budget.find()
        .then((budgets) => {
            res.status(200).json(budgets)
        })
        .catch((error) => {
            next(error)
        })
})

router.post("/budgets", (req, res, next) => {
    const {budget} = req.body

    const newBudgetDetails = {
        budget, 
        //createdBy: req.payload._id
    }

    Budget.create(newBudgetDetails)
        .then(() => {
            res.status(201).send("Vendor was created")
        })
        .catch((error) => {
            next(error)
        })
})

router.put("/budgets/:budgetId", (req, res, next) => {
    const {budgetId} = req.params
    const {budget} = req.body
    const updatedBudgetDetails = {
        budget,
        createdBy: req.payload._id
    }

    Budget.findByIdAndUpdate(budgetId, updatedBudgetDetails, {new: true})
        .then(() => {
            res.status(200).send("Budget is updated")
        })
        .catch((error) => {
            next(error)
        })
})


module.exports = router