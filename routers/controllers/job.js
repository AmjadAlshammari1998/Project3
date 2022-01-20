// const userModel = require("../../db/models/userModel");
const jobModel = require("../../db/models/jobModel");

const jobs= async(req,res)=>{
    const joob = await jobModel.find({});
    console.log("job");
    res.status(200).json(joob)
    console.log("job");
}
  const addJob = async (req, res) => {
 
    const {nameJob ,descriptionJob, salary ,img } = req.body;
          const newjob = new jobModel({ nameJob, descriptionJob,salary,img });
    try {
      const response = await newjob.save();
    //   const job = await jobModel.find({});
      res.status(201).json(response);
    } catch (error) {
      res.send(error);
    }
  };


  const deleteJob = async (req, res) => {
    const id = req.params.id;
    const user = req.token.userId;
    try {
      const deleteJobs = await jobModel.findOneAndDelete({ _id: id , userId:user});
      res.status(201).json(deleteJobs);
      console.log("jjjjjjj");
    } catch (error) {
      res.status(403).json(error);
    }
  };

  
module.exports={jobs,addJob,deleteJob};