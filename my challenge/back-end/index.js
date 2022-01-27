
const cors =require("cors")
const express = require("express");
const app = express();
const fs = require("fs");
const port = 3001;
const jsonFile = require("./user.json")


var  corsOption ={
    origin: "*",
    optionSuccessStatus:200,
}

// let data = JSON.parse(jsonFile)
app.use(express.static('public'))
app.get("/", cors(corsOption),(req, res) => {
    res.send(jsonFile)
})
app.get("/name", cors(corsOption),(req, res) => {
    res.send(jsonFile.name)
})
app.get("/age", cors(corsOption),(req, res) => {
    res.send(jsonFile.age)
})
app.get("/major", cors(corsOption),(req, res) => {
    res.send(jsonFile.major)
})
app.get("/profile", cors(corsOption),(req, res) => {
    res.send(jsonFile.profile)
})
app.get("/email", cors(corsOption),(req, res) => {
    res.send(jsonFile.email)
})

app.listen(port)
