const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const signUpRoute = require("./routers/route/signUpRoute");
const loginRoute = require("./routers/route/loginRoute");
const accountRoute =require("./routers/route/accaountRoute");

app.use(signUpRoute);
app.use(loginRoute);
app.use(accountRoute);


////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})
