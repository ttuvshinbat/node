const express = require("express")
const res = require("express/lib/response")
const path = require("path")
const app = express()
const books = require("../book.json")

let a = [];
function randomIntFromInterval(min, max, count) {
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    for (let i = 1; i <= count; i++) {
        while (a.includes(random) > 0) {
            random = Math.floor(Math.random() * (max - min + 1) + min)
        }
        a.push(random);
    }
    return a;
}
const rndInt = randomIntFromInterval(1, 8, 3)


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))
app.set("view option", { layout: false })

app.get("/", (req, res) => {
    res.render("index", { nom: books.books, rndInt: rndInt, })
})
app.get("/books", (req, res) => {
    res.render("books", { nom: books.books })
})
console.log(rndInt)
console.log(a)
module.exports = app;