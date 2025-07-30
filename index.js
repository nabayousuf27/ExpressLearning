const express = require('express');  //this express is actually a function
const app = express() //here we are executing it and it will return some value thta value we are storing in app variable , this will hhelp in creating our server side web application , this is actually an object
const port = 3000

app.get('/', (req, res) => {
    console.log("request recieved");
// res.send('Hello World! , request recieved');
// json formatdata
  // res.send({
  //     name: "naba",
  //     school : "Dha",
  // });
  // })
//html response
let code = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";
res.send(code);
})
//listen : create a web server that listens for incoming apis
app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
