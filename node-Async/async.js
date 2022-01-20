


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


async function printAllAsyncs(){
    await printFilms('A',()=> {});
    await printFilms('B',()=> {});
    await printFilms('C',()=> {});
}
printAllAsyncs();