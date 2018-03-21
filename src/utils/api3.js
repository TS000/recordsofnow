var Discogs = require('disconnect').Client

module.exports = {

    fetchPopularGenres: function(genre) {
        // var apiKey = 'VyJGZUvrInSwXvMwqWgl'
        // var apiSecret = 'zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ'
        // var authToken = 'APwVxyDaDtwFBBDGIneNcKngLYrhQpwVcICcfbhJ'
        // var oauth_signature = "zcuyHNNtnXcfcpwjOVhCnxFzMZlCHqQQ%26"
        // var oauth_consumer_key = "VyJGZUvrInSwXvMwqWgl"
        // var oauth_signature = "PLAINTEXT"
        // var timestamp = Date.now(+104)
        // var nonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

        // var tokenGet = window.encodeURI('https://api.discogs.com/oauth/request_token?oauth_consumer_key=' + apiKey + '&oauth_token=&oauth_signature_method=' + oauth_signature + '&oauth_timestamp=' + timestamp + '&oauth_nonce=' + nonce + '&oauth_version=1.0&oauth_signature=' + apiSecret + '%26&=')

        // var tokenPost = window.encodeURI('https://api.discogs.com/oauth/access_token?oauth_consumer_key=' + apiKey + authToken + '&oauth_signature_method=' + oauth_signature + '&oauth_timestamp=' + timestamp + '&oauth_nonce=' + nonce + '&oauth_version=1.0&oauth_signature=' + apiSecret + '&=')


var db = new Discogs().database()
db.getRelease(176126, function(err, data){
    console.log(data)
})
        // return Axios.get(tokenGet)
        //     .then((data) => {
                
        //         var authToken = data.data
        //         return authToken
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
            
            // })
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