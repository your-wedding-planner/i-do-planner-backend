const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    weddingDate: {
      type: Date,
      required: [true, "Date of wedding is required."],
    }, 
    namePartner: {
      type: String,
      required: [true, "Name of partner is required."],
    },
    weddingBudget: {
      type: Number,
      min: 1,
      required: [true, "Budget of wedding is required"]
    }
    // guestList: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //   ref: "Guest"
    // }],
    // vendorList: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Vendor"
    // }]
    // Photo
    // Location
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
