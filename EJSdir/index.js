//trough ejs we dont send responses , we render responses
//to send htmlcode  or anyhting in the form of file so we use response.render

const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
//Using EJS 
app.set("view engine","ejs");   //view => templates
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req,res)=>{
    // res.send("this is home");
    res.render("home.ejs");
});
app.get("/home", (req,res)=>{
    res.send("this is home");
});

app.get("/rolldice",(req,res)=>{
    let diceValue = (Math.floor(Math.random()*6)+1);
    res.render("rolldice.ejs",{num : diceValue});
});
// app.get("/ig/:username", (req,res)=>{
//     const followers =["Naba","Yousuf","saba","hawa"]
//     let { username } = req.params;
//     res.render("instagram.ejs" , {username, followers});
// })
app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data)
    {
    res.render("instagram.ejs" , {data });
    }else{
        res.render("error.ejs");
    }

})
app.listen(port , () =>{
    console.log(`listening on port ${port}`);
}); 

