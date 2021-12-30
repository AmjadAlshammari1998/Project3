const userModel = require("../../db/models/userModel");

const profileInfo = async (req,res)=>{
    const id = req.params.id
    console.log(id);
    const user = await userModel.find({})
    res.status(200).json(user)
}


const usersInfo = async(req,res)=>{
    const user = await userModel.find({})
    res.status(200).json(user)
}

module.exports = { profileInfo, usersInfo };

