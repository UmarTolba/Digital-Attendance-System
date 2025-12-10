const express = require("express");
const router = express.Router(); // Should be lowercase 'router'
const { 
  getAllSessions,
  getSessionsByDate,
  addSession,
} = require("../controllers/sessionController");

// GET all sessions
router.get("/", getAllSessions);

// GET sessions by date
router.get("/date", getSessionsByDate);


// POST create new session
router.post("/", addSession);


module.exports = router;