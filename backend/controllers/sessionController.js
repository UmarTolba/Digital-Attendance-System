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



module.exports = {
    getAllSessions,
    getSessionsByDate,
    addSession,
};