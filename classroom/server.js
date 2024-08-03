const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");


app.get("/getcookies")
app.get("/", (req , res)=>{
    res.send("Hi , I am root!");
});

app.use("/users", users);
app.use("/posts", posts);
//Post 

app.listen(3000, () => {
    console.log("server is listening to 3000");
});