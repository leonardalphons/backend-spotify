const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "artist"], //ENUM: choose from a strict set of predefined values
    default: "user", //at first everyone is a user
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
