
const express = require("express");
const app = express();
const fs = require("fs");
const port = 3001;
app.use(express.static('public'))
app.use(express.json())
const {body, validationResult} = require("express-validator")
// const regName = /[a-zA-Z]/
// const regEmail = /[a-zA-Z0-9_.@]/
// const regNumber = /^[\d]{8,11}$/
// const regPassword = /^[a-zA_Z0-9]{4,12}$/

// app.post("/register", (req, res) => {
//     const data =req.body;
//     username = data.name;
//     email = data.email;
//     password = data.password;
//     number = data.number;
//     if(regName.test(username) && regEmail.test(email) && regNumber.test(number) && regPassword.test(password))  {
//         res.send("hariult end irne")
//     }else{
//         res.send("shaardlaga hangahgui baina")
//     }

   
//    })
  
// app.listen(port, ()=> {
//     console.log(`listening at http://localhost:${port}`)
// })


//2  express validation
app.post("/register", body("name").notEmpty(),
body("email").isEmail().custom((value) => {
    if(!value.includes('@mstars')) throw new Error("email dotor mstars zaaval baih ystoi")
    return true; //else tohioldold match hiichij bolno gej uzjiin
}),
body("phone").isNumeric().isLength({min: 8, max:14}),
body("password").isStrongPassword(),
body('age').isNumeric(),




(req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }else{
        res.json({
            succes : true
        })
    }
})

app.post("/register/test", (req, res) => {
    const data =req.body;
    res.json({
        "succes" : true,
        "data ": data,
        "message": "successfully recieved data!",
        "bolj baina": "za za boljiin"
    })
    username = data.name;
    email = data.email;
    password = data.password;
    number = data.number;
 
   })
  //3 sanitize
app.post (
    "/sanitize",
    body('type').replace(["js"], "javascript"),
    body("username").toLowerCase(),
    body("extension").default("png"),
    body('paragraph').trim(),
    (req, res) =>{
        const data =req.body;
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }else{
            res.json({
                succes : true,
                data : data
            })
        }
    })

app.listen(port, ()=> {
    console.log(`listening at http://localhost:${port}`)
})

