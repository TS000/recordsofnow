import Axios from 'axios'

module.exports = {

    var apiKey = 'VyJGZUvrInSwXvMwqWgl'
    var apiSecret = 'zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ'
    var authToken = ''

    fetchToken: function() {
        var oauth_signature = "zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ%26"
        var oauth_consumer_key = "VyJGZUvrInSwXvMwqWgl"
        var oauth_signature = "PLAINTEXT"
        var timestamp = Date.now()
        var nonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

        var encodedURI = window.encodeURI('https://api.discogs.com/oauth/access_token?oauth_consumer_key='+ apiKey +'&oauth_token='+ authToken +'&oauth_signature_method='+ oauth_signature +'&oauth_timestamp='+ timestamp +'&oauth_nonce='+ nonce +'&oauth_version=1.0&oauth_signature='+ apiSecret +'&'+ authToken +'')

        return Axios({
                method: 'POST',
                url: encodedURI,
                headers: {
                    'oauth_verifier': 'ZbvJDBflAI',
                    'Cache - Control': 'no-cache'
                },
                data: {
                    user: 'name'
                }
            })
            .then(function(data) {
                return data
            })
    }

    fetchPopularGenres: function(genre) {
        var encodedURI = window.encodeURI('https://api.discogs.com/database/search?q=' + genre + '&key=' + apiKey + '&secret=' + apiSecret + '')

        return Axios.get(encodedURI)
            .then(function(data) {
                return data
            })
    }
};