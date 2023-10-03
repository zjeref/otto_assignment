const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const triggerSchema = new Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    symbol: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Trigger", triggerSchema);