const express = require("express");

const adminRoute =express.Router()

const{admin}= require("../controllers/admin");

adminRoute.get("./admin",admin)


module.exports = adminRoute
