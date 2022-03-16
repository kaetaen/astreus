const axios = require('axios')

async function fetch (url) {
    const data = await axios.get(url)

    return data.data
}

module.exports = fetch