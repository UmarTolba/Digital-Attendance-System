const express = require("express");
const { getAllUsers, getUser, createUser, updateUser, deleteUser, login } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/id", getUser);
router.post("/login", login);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;
