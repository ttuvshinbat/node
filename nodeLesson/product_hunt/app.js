http://52.221.191.153/api/foods
var http = require("http")
const fs = require('fs')
http.request({
    host: "52.221.191.153",
    method: "GET",
    path: "/api/foods"
}, function(response){
    response.setEncoding('utf-8');
    response.on("readable", function(){
        // console.log(JSON.parse(response.read()))
        data = JSON.parse(response.read()).data
        console.log(data)
        fs.writeFile('/Users/mstars_lab1_12/Desktop/product_hunt/food.txt', "", err => {
            if(err){
                console.error(err)
                return
            }
        })

        data.map(food => {
            console.log(food.name)
            const content = ` ${food.name}  | ${food.price} | ${food.stock} ` + "\n";
            fs.writeFile('/Users/mstars_lab1_12/Desktop/product_hunt/food.txt', content, {flag: "a+"}, err => {
                if(err){
                    console.error(err)
                    return
                }
            })

        })

    });
    
   

}




).end()
