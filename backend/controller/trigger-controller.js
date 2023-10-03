const asyncHandler = require("express-async-handler");
const Trigger = require("../model/Trigger");

exports.createTigger = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const { symbol, price } = req.body;
  const newTrigger = new Trigger({
    user: id,
    symbol: symbol,
    price: price,
  });
  await newTrigger.save();
  res.status(200).json("Success");
});

exports.getTriggerByUser = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const allTriggers = await Trigger.find({ user: id });
  res.status(200).json(allTriggers);
});

exports.deleteTrigger = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteTrigger = await Trigger.deleteOne({ _id: id });
  res.send("success");
});
