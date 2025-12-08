const SessionPassword = require("../models/sessionPasswordModel");

const addSessionPassword = async (req, res)=>{
    const randomNumber = parseInt(Math.random() * 100000);
    const sessionPassword = await SessionPassword.create({session:req.body.sessionID, password:randomNumber});
    res.status(201).json(sessionPassword);
}

const findSessionByPassword = async (req, res)=>{
    const sessionPassword = await SessionPassword.find({session:req.body.sessionID, 
        password:req.body.password}).populate("session");
    if(sessionPassword.length <= 1)
    {
        res.status(404).json({
            message:"No session found with that password"
        });
    }
    else
    {
        res.status(200).json(sessionPassword);
    }
}

const getAllSessionPasswords = async (req, res)=>{
    const sessionPassword = await SessionPassword.find().populate("session");
    res.status(200).json(sessionPassword);
}

module.exports = {addSessionPassword, findSessionByPassword, getAllSessionPasswords};