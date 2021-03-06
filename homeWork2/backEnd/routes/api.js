const express = require("express")
const res = require("express/lib/response")
const { handle } = require("express/lib/router")
const path = require("path")
const router = express.Router()
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


router.get("/books", (req, res) => {
        res.json(books);
    })

router.get("/book/:isbn_id", (req, res) => {
    let isbn = req.params.isbn_id
    nom.filter(data => {
        if (isbn == data.isbn) {
            res.send(data)
        }
    })
})
router.post("/add", body("isbn").isNumeric().isLength({ min: 12, max: 13 }),
    body("title").notEmpty(),
    body("subtitle").notEmpty(),
    body("author").notEmpty(),
    body("published").notEmpty(),
    body("publisher").notEmpty(),
    body("pages").notEmpty(),
    body("description").notEmpty(),
    body("website").notEmpty(),

    (req, res,next) => {
        const errors = validationResult(req)
        console.log(req.body)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
       
            const data = req.body
            date = new Date(Date.now())
            fs.appendFile("book_add.json",
                "\nisbn " + data.isbn + " date " + date.toString(),
                () => { }
            )
        
    })
router.get("/maxpages", (req, res) => {
    let max = Math.max(...nom.map(({ pages }) => pages))
    let result = nom.filter(({ pages }) => pages === max)
    res.send(result)
})
router.get("/minpages", (req, res) => {
    let min = Math.min(...nom.map(({ pages }) => pages))
    let result = nom.filter(({ pages }) => pages === min)
    res.send(result)
})
router.get("/search", (req, res) => {
    const title = req.query.title.replace(/['"]+/g, "")

    res.send(

        nom.filter((data) => {
            console.log(title)

            const garchig = data.title.toLowerCase().includes(title.toLowerCase());
            console.log(garchig)
            return garchig

        }))
})


module.exports = router;