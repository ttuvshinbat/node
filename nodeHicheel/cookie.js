var http = require("http")
var url = require("url")
http.createServer(function(request, response){
    var cookies = request.headers.cookie
    if(!cookies){
        let a = "tuvshee"
        response.setHeader("Set-cookie", a)
        console.log("cookie text nemlee")
        return response.end();
    }else{
        console.log(cookies);
        console.log("cookie already buynaa")
    }
    return response.end("cookie set" + cookies.toString())
    }).listen(3009);

    let a="aaewewedsdewddsxac"
    replace(a.replace)
