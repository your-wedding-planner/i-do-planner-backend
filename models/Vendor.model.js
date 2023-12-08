const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const vendorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    description: {
      type: String
    },
    URL : {
      type: String
    },
    typeOfService: {
      type: String,
      required: [true, "Type of service is required."],
      enum: ["Decoration", "Photographer", "Music", "Food", "Beauty & Health", "Officials", "Location", "Dress & Accessories", "Invitations", "Gifts"]
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
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

const Vendor = model("Vendor", vendorSchema);

module.exports = Vendor;
