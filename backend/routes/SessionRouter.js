const express = require("express");
const router = express.Router(); // Should be lowercase 'router'
const { 
  getAllSessions,
  getSessionsByDate,
  addSession,
  deleteSession,
  updateSession
} = require("../controllers/sessionController");

router.get("/", getAllSessions);
router.get("/date", getSessionsByDate);
router.post("/", addSession);
router.put("/:id", updateSession);
router.delete("/delete", deleteSession);


module.exports = router;