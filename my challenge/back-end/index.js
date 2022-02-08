
const cors = require("cors")
const express = require("express");
const app = express();
const fs = require("fs");
const port = 3001;
const jsonFile = require("./user.json")
const router = express.Router()


var corsOption = {
    origin: "*",
    optionSuccessStatus: 200,
}

// let data = JSON.parse(jsonFile)
app.use(express.static('public'))
app.get("/", cors(corsOption), (req, res) => {
    res.send(jsonFile)
})
app.get("/name", cors(corsOption), (req, res) => {
    res.send(jsonFile.name)
})
app.get("/age", cors(corsOption), (req, res) => {
    res.send(jsonFile.age)
})
app.get("/major", cors(corsOption), (req, res) => {
    res.send(jsonFile.major)
})
app.get("/profile", cors(corsOption), (req, res) => {
    res.send(jsonFile.profile)
})
app.get("/email", cors(corsOption), (req, res) => {
    res.send(jsonFile.email)
})
router.get("/userid/id", function (req, res, next) {
    const id = req.params.id
    if (id < 10) {
        const err = new Error("can\'t find user with this ID!")
        err.status = "fail";
        err.statusCode = 500
        return next(err);
    }
    res.send("user info with ID" + id)
})


app.listen(port)
