// const express = require('express')
// const app =express()
// const fs = require('fs')
// const port =3000

// app.get("/users/:userId", (req, res) =>{
//   let userId = req.params.userId
//     let jsonFile ;
//     fs.readFile(('./user.json'), (err, data) => {
//         if(err) {
//             console.error(err)
//         }
//        jsonFile= JSON.parse(data.toString())
//        console.log(jsonFile)
//        jsonFile.map(data => {
//         if(  userId === data.id)  {
//            res.send(data)
//         }
//        })

     
//     })
//     res.send(req.params)
// })
