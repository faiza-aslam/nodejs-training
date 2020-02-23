const axios = require('axios');
let resp = {};

axios.get('https://swapi.co/api/films/').then((res) => {
    console.log("\n\nAll the films of Star Wars: ");    
    resp = res.data.results;
    resp.forEach(m => {
        console.log(m.title);
    });
    //console.log(resp);
}, (err) => {
    console.log(err);
});

module.exports = resp;