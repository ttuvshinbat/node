const express = require("express")
const res = require("express/lib/response")
const path = require("path")
const app = express()
const books  = require("../book.json")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))
app.set("view option", { layout: false })


console.log(path.join(__dirname, "../views"))
app.get("/", (req, res) => {
    res.render("books", { nom: books.books })
})
app.get("/author", (req, res) => {
    res.render("author", { nom: books.books })
})

module.exports = app;