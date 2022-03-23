// const path = require("path")

// const notes = '/Users/mstars_lab1_12/desktop/test.txt';

// console.log(path.dirname(notes))

// console.log(path.basename(notes))

// console.log(path.extname(notes))

// const fs = require("fs")

// fs.stat('/Users/mstars_lab1_12/desktop/test.txt', (err, stats) =>{
// if(err){
//     console.log(err)
//     return
// }else{
//     console.log(stats)
// }

// })


// const fs = require("fs")
// fs.appendFile("file.log", content, err => {
//     if(err) {
//         console.log(err)
//         return
//     }
// })

// const fs = require("fs")
// const folderPath = "/Users/mstars_lab1_12/desktop/asd"
// console.log(fs.readdirSync(folderPath))

const fs = require("fs")
fs.renameSync("/Users/mstars_lab1_12/Desktop/nameSoliv", "/Users/mstars_lab1_12/desktop/nnameSoliv32", err =>{
    if(err){
        console.error(err)
        return
    }
})
db.universities.aggregate([{$group:{_id: {name:"$name",city:"$city"},totaldocs : {$sum:1}}}])
db.universities.aggregate([ {$group : { _id:null, count:{$count:{} }} } ])
db.universities.aggregate({[$group:{ _i}]})

db.universities.insertOne([
    {
      totalStudents: 100,
},])

db.universities.aggregate([
    {$group : {_id:{name :"$name", counted:"$totalstudent" },
     totalStudents: {$sum:{$multiply:["$totalstudents",2]}}}},
    {$match:{totalStudents:{$gte:150}}},
    {$sort:{totalStudents: -1}}])

  
    db.universities.aggregate([
        {$group : {_id:{name :"$name", counted:"$totalStudent" },
         totalstudents: {$sum:{$multiply:["$totalStudents",2]}}}},
        {$match:{totalstudents:{$gte:150}}},
        {$sort:{totalstudents: -1}}])

        db.universities.aggregate([{$group:{_id:null, summitTotal:{$sum:"$totalStudents"}}}])

        db.universities.aggregate([{$match:{name:"UPSA"}},{$unwind: '$students'},{$group:{_id:null,maximum:{$max: "$students.year"}}}]).pretty()

        db.universities.aggregate([
        {$match:{name:"USAL"}},
        {$unwind: '$students'},
        {$group:{_id:null,maximum:{$max: "$students.year"}}}]).pretty()

        db.universities.aggregate([{$match : {name: 'UPSA'}},
        {$unwind: "$students"},
         {$project: {_id:0, "students.year":1, "students.number":1}},
         {$sort : {"students.number":-1}},{$limit:2}]).pretty()

         db.universities.aggregate([{
             $match : {name :"USAL"}},
             {$project : {_id: 0, name : 1}},
             {$lookup: {from: 'courses', localField : 'name', foreignField : "university",as: "courses"}}]).pretty()

             db.courses.aggregate([{$sortByCount : "$level"}])


             db.createCollection("food",
              {validator:{ $jsonSchema :{
                 bsonType: "object",
                 required: ["name", "price", "portion", 'discount', 'stock'],
                 properties: {
                     name:{bsonType: "string",
                    description:"error this is string"},
                     price:{bsonType: "int",
                     description:"error this is number"},
                     portion:{bsonType: "int",
                     description:"error this is number"},
                     discount:{bsonType: "int",
                     description:"error this is number"},
                     stock:{bsonType: "int",
                     description:"error this is number"},
                 }

             }},
            validationLevel : "moderate",
            validationAction: "error"
        })
        db.food.insertOne({
            name: "buuz",
            price: 5900,
            portion:1,
            discount:0,
            stock:2

        })