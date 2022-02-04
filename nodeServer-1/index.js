const express = require("express")
const app = express()
const port = 5001

// app.get("/food", (req, res) => {
//     res.send("hello world")
// })

// food dotor file irj baigaa bolovch sonhronoor duudaad hooson file duudaad baih shig baina promise heregleh ystoi bol uu

food ="";
const request = require("request")
request("http://52.221.191.153/api/foods", (err,response, body ) => {
    if(err){
        console.error(err)
    }
  let food =JSON.parse(body)
  let hool = food.data
 hool.map(list => {
    food +=`<h2>${list.name} | ${list.price} | ${list.stock}</h2>`
 })
 
  
}) 
console.log(food)
app.get("/foods", (req, res) => {
    res.send("food" + food)
})


app.listen(port)