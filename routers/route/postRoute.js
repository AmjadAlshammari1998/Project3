const express = require("express");
const postRoute=express.Router();


const {posts,addPost,deletePost,allFavorite,favorite ,Update} = require("../controllers/post");
const {authentication}=require("../middlewares/authentication");


postRoute.get("/posts",posts);
postRoute.post("/addPost",authentication,addPost);
postRoute.delete("/deletePost/:id",authentication,deletePost)
postRoute.get("/allFavorite", authentication, allFavorite);
postRoute.post("/favorite", authentication, favorite);
postRoute.put("/updatePost/:id",authentication,Update)


module.exports = postRoute;

