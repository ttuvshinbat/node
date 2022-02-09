const express = require("express")
const res = require("express/lib/response")
const path = require("path")
const app = express()
const books = require("../book.json")

let nom = books.books
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
app.get("/author", (req, res) => {
    res.render("author", { nom: books.books })
})
app.get("/book/:isbn_id", (req, res) => {
    let isbn = req.params.isbn_id
    nom.filter(data => {
        if (isbn == data.isbn) {
            res.send(data)
        }
    })
})
app.get("/maxpages", (req, res) => {
    let max = Math.max(...nom.map(({ pages }) => pages))
    let result = nom.filter(({ pages }) => pages === max)
    res.send(result)
})
app.get("/minpages", (req, res) => {
    let min = Math.min(...nom.map(({ pages }) => pages))
    let result = nom.filter(({ pages }) => pages === min)
    res.send(result)
})

app.get("/add", (req, res) => {
    res.render("add", { nom: books.books })

})
console.log(rndInt)

module.exports = app;