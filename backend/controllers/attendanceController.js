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

const updateAttendance = async (req, res) =>{
    try {
        console.log("Update request received for ID:", req.params.id);
        console.log("Request body:", req.body);
        
        const attendance = await Attendance.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        ).populate("user").populate("session");
        
        if (!attendance) {
            console.log("Attendance record not found");
            return res.status(404).json({ message: "Attendance record not found" });
        }
        
        console.log("Updated attendance:", attendance);
        res.json(attendance);
    } catch (error) {
        console.error("Update error:", error);
        res.status(400).json({ message: error.message });
    }
};

const deleteAttendance = async (req, res) =>{
    try {
        console.log("Delete request received for ID:", req.params.id);
        const result = await Attendance.findByIdAndDelete(req.params.id);
        if (!result) {
            console.log("Attendance record not found");
            return res.status(404).json({ message: "Attendance record not found" });
        }
        console.log("Deleted record:", result);
        res.json({ message: "Attendance record deleted", deletedRecord: result });
    } catch (error) {
        console.error("Delete error:", error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = {getAllAttendance, getAttendanceBySession, recordAttendance, updateAttendance, deleteAttendance};