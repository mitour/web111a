const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
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
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Active"],
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: "basic",
      enum: ["basic", "supervisor", "admin"],
    },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/8512/8512512.png",
    },
  },
  {
    timestamps: {
      currentTime: () => Date.now() + 60 * 60 * 1000 * 8,
    },
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcryptjs.genSalt(Number(process.env.BCRYPT_SALT));
  const hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const user = await this.model.findOne(this.getQuery());
  if (this._update.name === user.name)
    return next(new Error("name is the same as the old one."));
  if (!this._update.password) return next();
  const isSamePassword = await user.comparePassword(this._update.password);
  if (isSamePassword) next(new Error("password is the same as the old one."));
  const salt = await bcryptjs.genSalt(Number(process.env.BCRYPT_SALT));
  const hashedPassword = await bcryptjs.hash(this._update.password, salt);
  this._update.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
