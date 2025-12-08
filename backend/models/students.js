const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    id: { type: Number, required: true },
});

module.exports = mongoose.model("students", studentsSchema);