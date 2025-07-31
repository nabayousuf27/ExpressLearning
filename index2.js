//path parameters

const express = require('express'); 
const app = express() 
const port = 3000


app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
});

app.get('/', (req, res) => {     //root path
    res.send("you selected root path");
})

app.get('/:username', (req, res) => {     //variable : username
    console.log(req.params);
    res.send("testing path parameters");
});

// app.get('/:username/:id', (req, res) => {     
//     let { username, id } = req.params;
//     res.send(`testing path parameters with user name and id <br>  welcome to the page of @${username}.`);
// });

//sending html code
app.get('/:username/:id', (req, res) => {   
    let { username, id } = req.params;  
    let htmlstr = `<h1> welcome to the page of @${username}</h1>`
    res.send(htmlstr);
});
