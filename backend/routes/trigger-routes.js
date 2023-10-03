const express = require("express");
const Router = express.Router();

const { userAuth } = require("../middlewares/auth");
const {
  createTigger,
  getTriggerByUser,
  deleteTrigger,
} = require("../controller/trigger-controller");

Router.post("/create", userAuth, createTigger);
Router.get("/all", userAuth, getTriggerByUser);
Router.delete("/:id", deleteTrigger)

module.exports = Router;
