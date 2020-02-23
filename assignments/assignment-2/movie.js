const fetch = require('node-fetch');
let resp = {};

fetch('https://swapi.co/api/films/?search=The%20Phantom%20Menace&format=json')
.then(response => response.json())
.then(res => {
    console.log("\n\nGetting film with Title: The Phantom Menace");    
    //console.log(res);
    resp = res.results;
    resp.forEach(m => {
        console.log(m.title);
    });
    //console.log(resp);
})
.catch(err => console.log("Error occurred: "+err));

module.exports = resp;