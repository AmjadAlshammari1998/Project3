const express = require("express");
const jobRoute =express.Router()

const{jobs,Show}=require("../controllers/job");


jobRoute.get("/jobs",jobs);
jobRoute.post("/Show",Show);

module.exports =jobRoute