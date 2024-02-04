const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

app.use(express.static('public',{index:false}));


// ENDPONTS
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})
app.use(express.urlencoded({extended:true}));

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The Name of The Student Is ${name}, ${age} Year Old, ${gender}, Resisdence ${address}, More about ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    res.status(200).sendFile('index.html');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The applications started successfully on port ${port}`);
});