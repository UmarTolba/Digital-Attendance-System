const express = require("express");
const router = express.Router(); // Should be lowercase 'router'
const { 
  getAllSessions,
  getSessionsByDate,
  addSession,
  deleteSession
} = require("../controllers/sessionController");

router.get("/", getAllSessions);
router.get("/date", getSessionsByDate);
router.post("/", addSession);
router.delete("/delete", deleteSession);


module.exports = router;