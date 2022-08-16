const express = require('express');
const router = require("express").Router();


const { updateUser, deleteUser, getUser,  getAllUsers} = require("../controllers/userController");
const {verifyUser, verifyAdmin }= require("../middlewares/verifyToken")


router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)
router .get("/:id", verifyUser, getUser);
router.put("/", verifyUser, getAllUsers);

module.exports = router