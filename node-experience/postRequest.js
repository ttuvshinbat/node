const request = require("request");
const url ='https://gorest.co.in/public/v1/users';

request.post({
  url:  url,
  body:  JSON.stringify({
      "email": "ttuvshinbat111adwcwe@gmail.com",
      "name" : "tuvshinbat",
      "gender": "male",
      "status": "married"
 }),  
 headers : {
     "Content-Type" : "application/json", 
     "Accept" :  "application/json", 
     "Authorization" : "Bearer 273d9705a351a8bc9e1cf34ac926260f50f4cfef6207db13e429258f2e0d1e7d"
 },
},
(error, response, body) =>{
    if(error){
        // console.log('error :' + error)
        console.log(response)
    }
    else{
        console.log(response)
        console.log(body.data)
    }
}
     
)
