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

// const fs = require("fs")
// fs.rename("/Users/mstars_lab1_12/desktop/asd", "/Users/mstars_lab1_12/desktop/nameSoliv", err =>{
//     if(err){
//         console.error(err)
//         return
//     }
// })

const fs = require("fs")
let dir  = "/Users/mstars_lab1_12/Desktop/123456/"
fs.rm(dir, {recursive: true, force: true}, (err) =>{
    if(err) {
        throw err;
    }
    console.log(`${dir} is deleted`)
}) 


