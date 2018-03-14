import Axios from 'axios'

module.exports = {

    fetchPopularGenres: function(genre) {
        var apiKey = 'VyJGZUvrInSwXvMwqWgl'
        var apiSecret = 'zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ'
        var authToken = 'APwVxyDaDtwFBBDGIneNcKngLYrhQpwVcICcfbhJ'
        var oauth_signature = "zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ%26"
        var oauth_consumer_key = "VyJGZUvrInSwXvMwqWgl"
        var oauth_signature = "PLAINTEXT"
        var timestamp = Date.now(+104)
        var nonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

        var tokenGet = window.encodeURI('https://api.discogs.com/database/search?q=' + genre + '&key=' + apiKey + '&secret=' + apiSecret)

        // var tokenPost = window.encodeURI('https://api.discogs.com/oauth/access_token?oauth_consumer_key=' + apiKey + '&oauth_token=' + authToken + '&oauth_signature_method=' + oauth_signature + '&oauth_timestamp=' + timestamp + '&oauth_nonce=' + nonce + '&oauth_version=1.0&oauth_signature=' + apiSecret + '&=')

        return Axios.get(tokenGet)
            .then((data) => {
                return data
            //     return Axios({
            //     method: 'POST',
            //     url: tokenPost,
            //     headers: {
            //     	"Acces-Control-Allow-Origin": "true",
            //         "Cache-Control": "no-cache",
            //         "oauth_verifier": "ZbvJDBflAI"
            //     },
            //     data: {
            //         user: 'name'
            //     }
            // })
            
            })
            // .then(function(data) {
            //     return data
            // }) 

        // var encodedURI = window.encodeURI('https://api.discogs.com/database/search?q=' + genre + '&key=' + apiKey + '&secret=' + apiSecret)

        // return Axios.get(encodedURI)
        //     .then(function(data) {
        //         return data
        //     })
    }
}