const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await User.findById(req.body.id);
  res.status(200).json(user);
};

const login = async (req, res) => {
  const user = await User.findOne({email:req.body.email, password: req.body.password});
  if(user != null)
  {
    res.json(user);
  }
  else
  {
    res.status(404).json({"message": "User Not Found"});
  }
};

const createUser = async (req, res) => {
  const email = req.body.email;
  //const isProf = /^\d/.test(email.split('@')[0]);
  console.log(req.body);
  const user = await User.create({ ...req.body, isProf:req.body.isProf });
  res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser, login };
