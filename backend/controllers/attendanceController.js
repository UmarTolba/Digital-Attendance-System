const Attendance = require("../models/attendanceModel");

const getAttendanceBySession = async (req, res) =>{
    const attendance = await Attendance.find({session: req.body.sessionID}).populate("user").populate("session");
    res.json(attendance);
};

const getAllAttendance = async (req, res) =>{
    const attendance = await Attendance.find().populate("user").populate("session");
    res.json(attendance);
};


const recordAttendance = async (req, res) =>{
    const attendance = await Attendance.create({
        user: req.body.user,
        session: req.body.session,
        status: req.body.status,
        checkInTime: new Date(),
    });
    res.json(attendance);
};

module.exports = {getAllAttendance, getAttendanceBySession, recordAttendance};