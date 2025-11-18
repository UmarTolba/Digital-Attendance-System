const mongoose  = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    session:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
        required: true
    },

    status: {
        type: String,
        enum: ['present', 'absent', 'late', 'excused'],
        default: 'Absent',
        required: true
    },
    
    checkInTime: {
        type: Date
    },
});

AttendanceSchema.index({ session: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);