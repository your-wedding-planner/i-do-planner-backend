const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const budgetSchema = new Schema(
  {
    budget: {
      type: Number,
      required: true,
      min: 0
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Budget = model("Budget", budgetSchema);

module.exports = Budget;
