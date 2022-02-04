const express = require("express")
const app = express()
const port = 5001

// app.get("/food", (req, res) => {
//     res.send("hello world")
// })

let foods ="";
const request = require("request")
request("http://52.221.191.153/api/foods", (err,response, body ) => {
    if(err){
        console.error(err)
    }
  let food =JSON.parse(body)
  let hool = food.data
 hool.map(list => {
    foods +=`<h2>${list.name} | ${list.price} | ${list.stock}</h2>`
 })
 
 
 console.log(foods)
}
) 

app.get("/foods", (req, res) => {
    res.send("food" + foods)
})


app.listen(port)