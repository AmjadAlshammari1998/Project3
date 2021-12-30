const userModel = require("../../db/models/userModel");
const jobModel = require("../../db/models/jobModel");

const jobs= async(req,res)=>{
    const joob = await jobModel.find({});
    res.status(200).json(joob);
  }
const Show = async (req,res)=>{

}
u
module.exports={jobs,Show}