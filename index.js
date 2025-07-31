const express = require('express');  //this express is actually a function
const app = express() //here we are executing it and it will return some value thta value we are storing in app variable , this will hhelp in creating our server side web application , this is actually an object
const port = 3000

//listen : create a web server that listens for incoming apis //start server
app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
});

// app.get('/', (req, res) => {
//   console.log("request recieved-root");
//   //html response
//   let code = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";
//   res.send(code + "\n you are on root page");

//   // res.send('Hello World! , request recieved');
//   // json formatdata
//   // res.send({name: "naba", school : "Dha",});
// });

// app.use( (req, res) => {
//   console.log("request recieved");
//   let code = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";
//   res.send(code);
// });
//same path k liye there is alawys singgle reponse

//routing
app.get('/', (req, res) => {     //root path
    res.send("you selected root path");
})
//same thing for different routes
app.get('/search', (req, res) => {     //search path
    res.send("you selected search");
});

app.get('/home', (req, res) => {     //home path
    res.send("you selected home");
});
// app.get("*", (req, res) => {    
//     res.send("this path does not exist");
// });

//post request
app.post("/" , (req,res) =>{
  res.send("you sent a post rquest to route");
})

