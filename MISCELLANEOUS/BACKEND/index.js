const express = require("express");
const app = express();
const port = 8080;

//to parse the post request data
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());
    
    
app.get("/register", (req,res)=>{
    let {user , password} = req.query;
    res.send(`standard get response , WELCOME ${ user}`);
});
app.post("/register", (req,res)=>{
    //handling post request data 
    let {user , password} = req.body;
    res.send(`standard post response , WELCOME ${user}`);
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});