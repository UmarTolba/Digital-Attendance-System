const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    day: { type: Number, required: true },
    month: {type: Number, required: true},
    period: { type: Number, required: true },
    semester: {type: String, enum:["fall", "spring"], required:true }
});

module.exports = mongoose.model("Session", sessionSchema);