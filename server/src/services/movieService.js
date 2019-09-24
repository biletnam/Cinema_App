const axios = require('axios')

module.exports = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/",
    params: {
        api_key: "d1b196c5991ae2f6e65dacf544030dc9"
    }
});