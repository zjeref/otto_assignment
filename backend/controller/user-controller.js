require("dotenv").config();
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

exports.createAccount = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({email:email});
  console.log(existingUser);
  if (existingUser) {
    return res.status(409).json({ error: "Already exist" });
  }

  const encry_password = bcrypt.hashSync(password);

  const newUser = new User({
    name: name,
    email: email,
    password: encry_password,
  });
  await newUser.save();

  res.status(200).json({message: "Success"});
});

exports.verifyAccount = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (!existingUser) {
    return res.status(404).json({ message: "Account doesn't exist" });
  }

  if (bcrypt.compare(password, existingUser.password)) {
    res.status(200).json({
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      token: generateToken(existingUser._id),
    });
  } else {
    res.status(401).json({ message: "Password does not match" });
  }
});



exports.getMe = asyncHandler(async (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};