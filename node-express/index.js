// server uusgene localhost 3000

// const express = require('express')
// const app = express()
// app.get('/', (req, res) =>{
//     res.send('hello wolds');
// })
// app.listen(3000);

food = "";
const request = require('request');
const express = require('express');

request('http://52.221.191.153/api/foods', (err, response, body) =>{
    if(err){
        console.log(err)
    }
    let hool = JSON.parse(body)
    let hehe = hool.data
    hehe.map(list => {
      food +=`<h2>${list.name} | ${list.price} | ${list.stock}</h2>`
    });
})



const app = express()
app.get('/api/foods', (req, res) =>{
    res.send(food);
})
app.listen(5001);



