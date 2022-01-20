const express = require("express");
const jobRoute =express.Router()

const{jobs,addJob,deleteJob}=require("../controllers/job");
const {authentication}=require("../middlewares/authentication");

jobRoute.get("/jobs",jobs);
jobRoute.post("/addJob",addJob);
// jobRoute.delete("/dletJob/:id",authentication,deleteJob);
jobRoute.delete("/jobs/:id",authentication,deleteJob)


module.exports =jobRoute
