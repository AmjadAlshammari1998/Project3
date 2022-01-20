const express = require("express");
require('dotenv').config()
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const signUpRoute = require("./routers/route/signUpRoute");
const loginRoute = require("./routers/route/loginRoute");
const accountRoute =require("./routers/route/accaountRoute");
const postRoute=require("./routers/route/postRoute");
const jobRoute=require("./routers/route/jobRoute");
app.use(jobRoute);
app.use(postRoute);
app.use(signUpRoute);
app.use(loginRoute);
app.use(accountRoute);


////////////////////////////
console.log(process.env.PORT)

app.listen(process.env.PORT,()=>{
    console.log("server is running");
})
