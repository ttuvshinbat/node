const express = require("express")
const res = require("express/lib/response")
const path = require("path")
const app = express()
const { book } = require("../book.json")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))
app.set("view option", { layout: false })


console.log(path.join(__dirname, "../views"))
app.get("/", (req, res) => {
    res.render("index", { test: "mhn" })
})


module.exports = app;