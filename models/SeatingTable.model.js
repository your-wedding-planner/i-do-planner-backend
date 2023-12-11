const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const seatingTableSchema = new Schema({
  tableName: {
    type: String,
    required: [true, "Name of table is required."],
  },
  assignedGuests: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Guest'
    }],
    default: function () {
      return [];
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const SeatingTableTable = model("SeatingTable", seatingTableSchema);

module.exports = SeatingTableTable;
