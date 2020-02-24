const fetch = require('node-fetch');

const call = (url) => {
    return fetch(url)
    .then(response => response.json());
};

module.exports = call;