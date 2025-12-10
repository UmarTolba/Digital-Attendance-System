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
    try {
        
        const attendance = await Attendance.create({
            user: req.body.user,
            session: req.body.session,
            status: req.body.status,
            checkInTime: new Date(),
        });
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({
            message:"Student Recorded before"
        });
    }
};

module.exports = {getAllAttendance, getAttendanceBySession, recordAttendance};