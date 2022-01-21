const express = require("express");
const app = express();
const cors = require("cors")
const fs = require("fs")

let options = { origin: "*" }
app.use(cors(options))
app.use(express.json())

app.get("/create", function (req, res) {
    let date = new Date();
    let time = `${date.getDate()}-${date.getTime()}-${date.getFullYear}-${date.getHours}-${date.getMinutes}-${date.getMilliseconds}`
    let file = `${time}.txt`;
    let timeStamp = date.getTime();
    let d = new Date(timeStamp).toString();
    res.json()

    fs.writeFile(`./read/${file}`, d, (err) => {
        if (err) throw err;
        console.log(file)
    })
})

app.get("/getfiles", function(req,res){
    res.json()
    fs.readdir("./read",(err, data)=>{
        if(err) throw err
        console.log(data)
    })
})

app.listen(4003)