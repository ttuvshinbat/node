
const request = require("request");

function printFilms(str, callback) {
    const MyPromise = new Promise((resolve, reject) => {
        request('http://52.221.191.153/api/foods', function (error, response, body) {
            if (error) return reject();

            console.log(str)
            return resolve();
        })
    })

    return MyPromise

}


function printAllPromise() {
    printFilms('A', () => { })
        .then(() => {
            return printFilms('B', () => { })
        })
        .then(() => {
            return printFilms('C', () => { })
        })

}
printAllPromise()