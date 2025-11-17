const Attendance = require("../models/attendanceModel");

const getAttendanceBySession = async (req, res) =>{
    const attendance = await Attendance.find({session: req.body.sessionID});
    res.json(attendance);
};


const recordAttendance = async (req, res) =>{
    const attendance = await Attendance.create({
        user: req.body.userID,
        session: req.body.sessionID,
        status: req.boyd.status,
        checkInTime: new Date(),
    });
    res.json(attendance);
};

module.exports = {getAttendanceBySession, recordAttendance};