const express = require("express")
const res = require("express/lib/response")
const { handle } = require("express/lib/router")
const path = require("path")
const app = express()
const books = require("../book.json")
const fs = require("fs")
const { body, validationResult } = require("express-validator")

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
app.get("/books",

    (req, res) => {
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
app.use("/add", body("isbn").isNumeric().isLength({ min: 12, max: 13 }),
    body("title").isEmpty(),
    body("subtitle").notEmpty(),
    body("author").notEmpty(),
    body("published").notEmpty(),
    body("publisher").notEmpty(),
    body("pages").notEmpty(),
    body("description").notEmpty(),
    body("website").notEmpty(),

    (req, res) => {
        const errors = validationResult(req)
        console.log(req.body)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        } else (res.send("data"))

        const data = req.body
        date = new Date(Date.now())
        fs.appendFile("book_add.json",
            "\nisbn " + data.isbn + " date " + date.toString(),
            () => { }
        )


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
app.get("/search", (req, res) => {
    const title = req.query.title.replace(/['"]+/g, "")
    res.send(
        nom.filter((data) => {
            data.title.toLowerCase().includes(title.toLowerCase())
        }))
})

console.log(rndInt)

module.exports = app;