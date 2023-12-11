const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const guestSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
    },
    age: {
      type: String,
      required: [true, "Age is required."],
      enum: ["Adult", "Child", "Baby"],
    },
    // table: {
    //   type: Number,
    //   // create enum (or tableId?) for bonus (tables need to be created first)
    // },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    notes: {
      type: String,
    },
    attending: {
      type: String,
      required: [true, "Attending is required."],
      enum: ["Attending", "Pending", "Declined"],
    },
    seatingTable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SeatingTable",
      default: null,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // menu: {
    //   type: String,
    //   // create enum (or menuId) for bonus (menus need to be created first)
    // }
  },
  {
    timestamps: true,
  }
);

const Guest = model("Guest", guestSchema);

module.exports = Guest;
