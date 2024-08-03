const express = require("express");
const router = express.Router();


//Index route - users
router.get("/", (req, res)=>{
    res.send("Get for users");
});

//show route - users
router.get("/:id", (req, res)=>{
    res.send("Show for show users id");
});

//Post route - users
router.post("/", (req, res)=>{
    res.send("Post for  users");
});

//Delete  route - users
router.delete("/:id", (req, res)=>{
    res.send("Delete for  users id");
});

module.exports = router;
