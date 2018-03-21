import Axios from 'axios'

module.exports = {

    fetchPopularGenres: function(genre) {
        var apiKey = 'VyJGZUvrInSwXvMwqWgl'
        var apiSecret = 'zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ'
        var encodedURI = window.encodeURI('https://api.discogs.com/database/search?q=' + genre + '&key=' + apiKey + '&secret=' + apiSecret + '')

        return Axios.get(encodedURI)
            .then(function(data) {
                var rekids = data.data.results
                var images = rekids.map(a => a.cover_image)
                return [images, rekids]

            })
            .catch((err) => {})
    }
}