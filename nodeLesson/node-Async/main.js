// function processData(){
//     var data = fetchData();
//     data +=1;
//     return data;
// }

// function processData(callback){
//     fetchData(function (err, data){
//         if(err){
//             console.log("za tiimee 2")
//             return callback(err)
//         }
//         data +=1;
//         callback(data);
//     })
// }

// var fs = require("fs");
// fs.readFile('input.txt', function (err, data){
//     if(err) return console.error(err);
//     console.log(data.toString())
// });
// console.log('progran end')

// 2.
const request = require("request");

function printFilms(str, callback){
    request('http://52.221.191.153/api/foods', function (error, response, body){
        console.log(str)
        return callback();
    })
}



function printAllCallback(){
    printFilms('a',()=>{
        printFilms('b',() =>{
            printFilms('c', ()=>{

            })
        })
    })
}
printAllCallback()