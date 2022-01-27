
const express = require("express");
const app = express();
const fs = require("fs");
const port = 3001;
const regName = /[a-zA-Z]/
const regEmail = /[a-zA-Z0-9_.@]/
const regNumber = /^[\d]{8,11}$/
const regPassword = /^[a-zA_Z0-9]{4,12}$/
app.use(express.static('public'))
app.use(express.json())
app.post("/register", (req, res) => {
    const data =req.body;
    username = data.name;
    email = data.email;
    password = data.password;
    number = data.number;
    if(regName.test(username) && regEmail.test(email) && regNumber.test(number) && regPassword.test(password))  {
        res.send("hariult end irne")
    }else{
        res.send("shaardlaga hangahgui baina")
    }

   
   })
  
app.listen(port, ()=> {
    console.log(`listening at http://localhost:${port}`)
})
