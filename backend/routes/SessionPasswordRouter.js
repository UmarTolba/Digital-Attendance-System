const express = require("express");
const Router = express.Router();
const {addSessionPassword, findSessionByPassword, getAllSessionPasswords} = require("../controllers/sessionPasswordController");

Router.post("/", addSessionPassword);
Router.get("/", findSessionByPassword);
Router.get("/all", getAllSessionPasswords);

module.exports = Router;