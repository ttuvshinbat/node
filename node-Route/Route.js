const express = require('express')
const app =express()
const fs = require('fs')
const port =3000

app.get("/users/:userId/", (req, res) =>{
  let userId = req.params.userId
    let jsonFile ;
    fs.readFile(('./user.json'), (err, data) => {
        if(err) {
            console.error(err)
        }
       jsonFile= JSON.parse(data.toString())
      
       jsonFile.map(data => {
        if(userId == data.id)  {
           console.log(data)
           
             res.send(data)
           
        }else{
            res.send(data + "bolq bn oo")
        }
       })
   })
  
})



// app.get("/users/:userId/books/:bookId", (req, res) =>{
//     res.send(req.params)
// })
// app.put("/", (req, res) =>{
//     res.send("hello world123")
// })

app.listen(port, () => {
    console.log(` example app listening at http://localhost:${port}`) 
    }
)