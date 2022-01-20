const fs = require('fs')
console.log("before")
fs.readFile("http://52.221.191.153/api/foods", function (error, data){
    console.log("** DUring **")
})
console.log("after")