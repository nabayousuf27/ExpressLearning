const express = require("express");
const app = express();
const port = 5500;

app.get("/register", (req,res)=>{
    res.send("standard get response");
});
app.post("/register", (req,res)=>{
    res.send("standard post response");
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});