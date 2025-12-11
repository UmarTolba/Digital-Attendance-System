const {getAllAttendance, getAttendanceBySession, recordAttendance, updateAttendance, deleteAttendance} = require("../controllers/attendanceController");
const express = require("express");
const Router = express.Router();

Router.get("/", getAllAttendance);
Router.post("/session", getAttendanceBySession);
Router.post("/", recordAttendance);
Router.put("/:id", updateAttendance);
Router.delete("/:id", deleteAttendance);

module.exports = Router;