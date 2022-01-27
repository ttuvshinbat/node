// 1 . ug comand aar node converter.js 20 'c' 
// gesen comoand ajiluulhad val=20 index=c gej hevlegdene

// process.argv.forEach((val, index,) => {
//     console.log(`${index}: ${val}`)
//   })

// 2. mon adil
const args = process.argv.slice(2)
regax = /[c+ | C+]/;

var gradus = args[0]
var unit = args[1]

let result;
var gradInt = parseInt(gradus)


if (unit == 'c') {
    result = gradInt * 1.8 + 32
    console.log(`Celsius ${gradus} = Fahrenheit ${result}\xB0F`)
}
 if(unit == 'f' ){
   result = ((gradInt-32)*5/9)
   console.log(`Fahrenheit ${gradus}  = Celcius ${result}\xB0C`)
  }




