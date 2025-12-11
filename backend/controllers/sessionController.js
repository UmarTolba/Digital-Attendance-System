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

const deleteSession = async (req, res) =>{
    const session = await Session.deleteOne({_id:req.body.id});
    res.status(200).json(session);
}

const updateSession = async (req, res) =>{
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(session);
}

module.exports = {
    getAllSessions,
    getSessionsByDate,
    addSession,
    deleteSession,
    updateSession
};