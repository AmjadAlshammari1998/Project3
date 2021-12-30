const express = require("express");
const accountRoute =express.Router()

const {profileInfo,usersInfo} = require("../controllers/accaount")

accountRoute.get("/profiles", profileInfo)
accountRoute.get("/users" , usersInfo)


module.exports = accountRoute
