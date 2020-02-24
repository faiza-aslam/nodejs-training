const axios = require('axios');

const getCall = (url) => {
    return axios.get(url)
}

module.exports = getCall;