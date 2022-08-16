const express = require('express');
const router = require("express").Router();

const {createHotel} = require("../controllers/hotelControllers");

router.post("/", createHotel);

module.exports = router
