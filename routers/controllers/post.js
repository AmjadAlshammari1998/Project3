const userModel = require("../../db/models/userModel");
const postModel = require("../../db/models/postModel");

const posts = async (req, res) => {
  const post = await postModel.find({}).populate("userId");
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

    // res.status(201).json("Pleast log in to delete!");
    console.log("jjjjjjj");

  } catch (error) {
    res.status(403).json(error);
  }
};

const favorite = async (req, res) => {
  const { postId } = req.body;
  const userId = req.token.userId;
  try {
    const postCheck = await userModel
      .find({ _id: userId })
      .populate("favorite");
    const check = postCheck[0].favorite.filter((elem) => {
      return elem._id == postId;
    });

    if (check.length) {
      const filterPost = await userModel
        .findOneAndUpdate(
          { _id: userId },

          {
            $pull: { favorite: postId },
          },
          { new: true }
        )
        .populate("favorite");
      res.status(201).json(filterPost);
    } else {
      const filterPost = await userModel
        .findOneAndUpdate(
          { _id: userId },
          {
            $push: { favorite: postId },
          },
          { new: true }
        )
        .populate("favorite");
      res.status(201).json(filterPost);
    }
  } catch (error) {
    res.send(error);
  }
};
const allFavorite = async (req, res) => {
  const userId = req.token.userId;
  const user = await userModel.find({ _id: userId }).populate("favorite");

  const favList = user[0].favorite;
  res.status(200).json(favList);
};


 const Update =async(req,res)=>{
   const id = req.params.id;
   const {text}=req.body;
   try {
     let updatPost=await postModel.findByIdAndUpdate({_id:id},{text})
     const texts=await postModel.find({})
     res.status(200).json(texts);
   } catch (error) {
     res.status(403).json(error)
   }
 }
//   const serchPost=async (req,res)=>{
//       const postId =req.prams.id;
//       const
//   }

module.exports = { posts, addPost, deletePost, allFavorite, favorite,Update };
