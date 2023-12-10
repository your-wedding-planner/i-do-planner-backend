const router = require("express").Router();
const SeatingTable = require("../models/SeatingTable.model");

router.get("/seatingTables", (req, res, next) => {
  console.log(req.payload);
  SeatingTable.find({ createdBy: req.payload._id })
    .then((tablesArray) => {
      res.status(200).json(tablesArray);
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/seatingTables", (req, res, next) => {
  const { nameOfTable, assignedGuests } = req.body();
  const newRequestBody = {
    nameOfTable,
    assignedGuests,
    createdBy: req.payload._id,
  };

  SeatingTable.create(newRequestBody)
    .then(() => {
      res.status(201).json("Seating Table was created");
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/seatingTables/:tableId", (req, res, next) => {
  const { tableId } = req.params;
  const { nameOfTable, assignedGuests } = req.body;
  const newRequestBody = {
    nameOfTable,
    assignedGuests,
    createdBy: req.payload._id,
  };

  SeatingTable.findByIdAndUpdate(tableId, newRequestBody, { new: true })
    .then((updatedTable) => {
      res.status(200).json(updatedTable);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/seatingTables/:tableId", (req, res, next) => {
  const { tableId } = req.params;
  SeatingTable.findByIdAndDelete(tableId)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
