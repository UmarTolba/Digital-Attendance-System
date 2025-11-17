import mongoose from "mongoose";

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
        enum: ['Present', 'Absent', 'Late', 'Excused'],
        default: 'Absent',
        required: true
    },
    
    checkInTime: {
        type: Date
    },
});

AttendanceSchema.index({ user: 1, session: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);