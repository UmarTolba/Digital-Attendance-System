const mongoose = require("mongoose");

const sessionPasswordSchema = mongoose.Schema({
    session:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
        required: true
    },
    password:{type:Number, required:true}
});

module.exports = mongoose.model('SessionPassword', sessionPasswordSchema);