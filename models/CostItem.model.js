const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const costItemSchema = new Schema(
  {
    nameVendor: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },    
    description: {
      type: String,
      required: true
    },
    typeOfCost: {
      type: String,
      required: true,
      enum: ["Decoration", "Photographer", "Music", "Food", "Beauty & Health", "Officials", "Location", "Dress & Accessories", "Invitations", "Gifts"]
    },
    // vendor: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Vendor"
    // },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const CostItem = model("Budget", costItemSchema);

module.exports = CostItem;
