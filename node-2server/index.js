const express = require("express")
const port = 3001;
const app = express()
const jsonFile = require("./user.json")
const cors = require("cors")
app.use(express.static("public"))
var corsOption = {
    origin:"*",
    optionSuccesStatus:200,
}
app.get("/server", cors(corsOption), (req, res) => {
    res.send(jsonFile)
})
app.listen(port)