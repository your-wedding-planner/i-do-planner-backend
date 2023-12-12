const router = require("express").Router();
const SeatingTable = require("../models/SeatingTable.model");

router.get("/seatingTables", (req, res, next) => {
  SeatingTable.find({ createdBy: req.payload._id }).populate("assignedGuests")
    .then((tablesArray) => {
      res.status(200).json(tablesArray);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/seatingTables/:tableId", (req, res, next) => {
  const { tableId } = req.params;
  SeatingTable.findById(tableId)
  .then((seatingTableDetails) => {
    res.status(200).json(seatingTableDetails)
  })
  .catch((error) => {
    next(error)
  })
})

router.post("/seatingTables", (req, res, next) => {
  const { tableName, assignedGuests} = req.body;
  const newRequestBody = {
    tableName,
    assignedGuests

  };
console.log(req.body);
  SeatingTable.create({...newRequestBody, createdBy: req.payload._id})
    .then(() => {
      res.status(201).json("Seating Table was created");
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/seatingTables/:tableId", (req, res, next) => {
  const { tableId } = req.params;
  const { tableName, assignedGuests} = req.body;
  const newRequestBody = {
    tableName,
    assignedGuests
    
  };

  SeatingTable.findByIdAndUpdate(tableId, {...newRequestBody, createdBy: req.payload._id}, { new: true })
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
