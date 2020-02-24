const getCall = require('./movies');
const call = require('./movie');

//using axios
getCall('https://swapi.co/api/films/')
.then((res)=> {
    console.log(res.data.results.length);
    printTitles(res.data.results);
});

//using fetch
call('https://swapi.co/api/films/?search=The%20Phantom%20Menace&format=json')
.then((res)=> {
    console.log(res.results.length);
    printTitles(res.results);
});

function printTitles(results) {
    results.forEach(r => {
        console.log(r.title);
    });
}