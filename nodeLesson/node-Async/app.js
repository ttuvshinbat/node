const request = require("request");

function printFilms(str){
    request('http://52.221.191.153/api/foods', function (error, response, body){
        console.log(str)
    })
}
function printAll(){
    printFilms("a")
    printFilms(" b")
    printFilms("  c")
}
printAll()