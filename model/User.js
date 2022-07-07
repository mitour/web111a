const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    maxLength: 255,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },
  createTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
