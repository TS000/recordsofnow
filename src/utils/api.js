import Axios from 'axios'

module.exports = {

    fetchPopularGenres: function(genre) {
        var apiKey = 'VyJGZUvrInSwXvMwqWgl'
        var apiSecret = 'zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ'
        var encodedURI_1 = window.encodeURI('https://api.discogs.com/database/search?q=' + genre + '&key=' + apiKey + '&secret=' + apiSecret + '')
        var encodedURI_2 = window.encodeURI('https://api.discogs.com/database/search?q=' + genre + '&key=' + apiKey + '&secret=' + apiSecret + '')

        return Axios.get(encodedURI_1)
            .then((response) => {
                var rekids = response.data.results
                var images = rekids.map(a => a.cover_image)
                return rekids
                return Axios.get(encodedURI_2)
            })
            .then((results) =>{
                return results
                console.log(results)
            })
            .catch((err) => {})
    }
}