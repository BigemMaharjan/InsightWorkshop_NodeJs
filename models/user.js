const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      // To make sure that email address of different users are not same
      validate: {
        validator: (value) => {
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return value.match(re);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      required: true,
      type: String,
      // To make sure that password is longer than 6 characters
      //   validate: {
      //     validator: (value) => {
      //       return value.length > 6;
      //     },
      //     message: "Please enter a long password.",
      //   },
    },
    address: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
