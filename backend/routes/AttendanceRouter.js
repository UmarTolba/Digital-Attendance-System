const {getAllAttendance, getAttendanceBySession, recordAttendance} = require("../controllers/attendanceController");
const express = require("express");
const Router = express.Router();

Router.get("/", getAllAttendance);
Router.get("/session", getAttendanceBySession);
Router.post("/", recordAttendance);

module.exports = Router;