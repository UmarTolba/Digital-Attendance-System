const express = require("express");
const router = express.Router(); // Should be lowercase 'router'
const { 
  getAllSessions,
  getSessionsByDate,
  getSessionById, // You need to add this to controller!
  addSession,
  updateSession,
  deleteSession
} = require("../controllers/sessionController");

// GET all sessions
router.get("/", getAllSessions);

// GET sessions by date
router.get("/date", getSessionsByDate);

// GET single session by ID (CRITICAL - for editing)
router.get("/:id", getSessionById); // Add this line!

// POST create new session
router.post("/", addSession);

// PUT update session
router.put("/:id", updateSession);

// DELETE session
router.delete("/:id", deleteSession);

module.exports = router;