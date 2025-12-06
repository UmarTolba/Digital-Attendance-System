const Session = require("../models/sessionModel")

const getAllSessions = async (req, res) =>{
    const Sessions = await Session.find();
    res.json(Sessions);
}

const getSessionsByDate = async (req, res) =>{
    const Sessions = await Session.find({day: req.body.day, month:req.body.month});
    res.json(Sessions);
}

const addSession = async (req, res) =>{
    const session = await Session.create(req.body);
    res.status(201).json(session);
}

const updateSession = async (req, res) => {
    try {
        const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(session);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteSession = async (req, res) => {
    try {
        await Session.findByIdAndDelete(req.params.id);
        res.json({ message: "Session deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getSessionById = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);
        if (!session) {
            return res.status(404).json({ error: "Session not found" });
        }
        res.json(session);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports = {
    getAllSessions,
    getSessionsByDate,
    getSessionById, // Add this
    addSession,
    updateSession,
    deleteSession
};