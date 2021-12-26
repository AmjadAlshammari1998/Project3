const express = require("express");
const postRoute=express.Router();


const {posts,addPost,deletePost} = require("../controllers/post");
const {authentication}=require("../middlewares/authentication");


postRoute.get("/posts",posts);
postRoute.post("/addPost",authentication,addPost);
postRoute.delete("/deletePost/:id",authentication,deletePost)



module.exports = postRoute;

