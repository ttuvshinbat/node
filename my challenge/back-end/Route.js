const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

// app.get("/users/:userId/", (req, res) =>{
//   let userId = req.params.userId
//     let jsonFile ;
//     fs.readFile(('./user.json'), (err, data) => {
//         if(err) {
//             console.error(err)
//         }
//        jsonFile= JSON.parse(data.toString())

//        jsonFile.map(data => {
//         if(userId == data.id)  {
//            console.log(data)

//              res.send(data)

//         }else{
//             res.send(data + "bolq bn oo")
//         }
//        })
//    })

// })
// app.get("/users/:userId/books/:bookId", (req, res) =>{
//     res.send(req.params)
// })
// app.put("/", (req, res) =>{
//     res.send("hello world123")
// })
// library?userId=546&bookId6754

app.post("/search", (req, res) => {
    let category = req.query.category
    let jsonFile;
    let array = [];
    fs.readFile(('./foods.json'), (err, data) => {
        if (err) {
            console.error(err)
        }
        jsonFile = JSON.parse(data.toString())
        jsonFile.map(data => {
            if (category === data.category) {
                console.log(data)
                array.push(data)

            } else {
                console.log('ene taarku bn')

            }
        })
        res.send(array);
    })

})

app.listen(port, () => {
    console.log(` example app listening at http://localhost:${port}`)
})
console.log("Bayanaa huurhun <3333 genee")