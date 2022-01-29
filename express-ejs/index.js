const express = require("express")
const app = express()
const port = 3001
const quotes = require("./data.json")
const data = quotes.quotes
app.use(express.json());
app.use(express.static("public"))
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", {layout : false});
app.get("/",  (req, res) =>
{
    res.render("index", {name : "Tuvshee"})
})
app.get("/aavaa", (req, res) => {
    res.send("aavaa")
})
app.get("/404", (req, res) => {
    res.render('404', {message : "oops"} );
        })

app.get("/quotes", (req, res) => {
    console.log(quotes.quotes.length)
    res.render("quotes", {data})
   })    
   app.get("/quote/:id", (req, res) => {
        let Id = req.params.id
        let quote = data[Id-1]
        res.render("quote", {data: quote})
   })    

app.listen (port, () => {
    console.log("app is running")
})


