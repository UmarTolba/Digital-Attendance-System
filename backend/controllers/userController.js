const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUser = async (req, res) => {
  const users = await User.findOne(req.params.id);
  res.json(users);
};

const createUser = async (req, res) => {
  const user = await User.create(req.body);
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

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
