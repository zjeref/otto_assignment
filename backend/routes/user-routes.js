const express = require("express");
const Router = express.Router();

const { userAuth } = require("../middlewares/auth");
const {
  createAccount,
  verifyAccount,
  getAccount,
  getMe,
  getAllDoctors,
} = require("../controller/user-controller");

Router.post("/create", createAccount);
Router.post("/verify", verifyAccount);
Router.get("/me", userAuth, getMe);

module.exports = Router;
