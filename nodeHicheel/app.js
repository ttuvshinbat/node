// const car ={
//     brand:"ford",
//     model:"fiesta"
// }
// const petsArray = ["dog", 'cat', 'bird', 'temee']
// console.log(petsArray)
// console.table(petsArray)
// console.assert(petsArray.length > 5)

let initialMemory = process.memoryUsage().heapUsed;
let word = null;
// let word=process.argv[2]
console.log('your')

let wordArray=[]

for(let i=0; i<1000; i++){
    wordArray.push(`${word} count: ${i}`)
}
console.log(`starting memory usage: ${initialMemory}.\nCurrnet memory ${process.memoryUsage().heapUsed}.
after using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory}`)

// console.log('my%s has %d years', "cat",2)
// if (process.env.NODE_ENV === 'development'){
//     console.log("testing! does everything wordk?")
// }
