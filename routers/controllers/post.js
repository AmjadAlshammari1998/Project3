const userModel = require("../../db/models/userModel");
const postModel = require ("../../db/models/userModel");

const posts = async (req,res)=>{
    const post =await postModel.find({});
    res.status(200).json(post);
}

const addPost = async (req, res) => {
    const { text, img } = req.body;
    const userId = req.token.userId;
    try {
      const newPost = new postModel({ text, img, userId });
      const response = await newPost.save();
      const post = await postModel.find({}).populate("userId");
      res.status(201).json(post);
    } catch (error) {
      res.send(error);
    }
  };

const deletePost = async (req, res) => {
    const postId = req.params.id;
    const userId = req.token.userId
    try {
      
        const deletePost = await postModel.findOneAndDelete({ _id: postId });
        const allPost = await postModel.find({}).populate("userId")
        
        res.status(201).json(allPost);
      
        res.status(201).json("Pleast log in to delete!");
        console.log("jjjjjjj");
      
    } catch (error) {
      res.status(403).json(error);
    }
  };
//   const serchPost=async (req,res)=>{
//       const postId =req.prams.id;
//       const
//   }

module.exports ={posts,addPost,deletePost};
