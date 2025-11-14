const express = require("express");
const Router = express.Router();
const {getAllSessions, getSessionsByDate,addSession} = require("../controllers/sessionController");
Router.get("/", getAllSessions);
Router.get("/date", getSessionsByDate);
Router.post("/", addSession);

module.exports = Router;