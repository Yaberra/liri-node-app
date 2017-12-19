var command1 = process.argv[2];
var command2 = process.argv[3];

function liriCommand () {
if (command1 === 'my-tweets') {
    console.log('twitter');

// requests to the Twitter

    var tweets = require('twitter');
    var { twitterKeys } = require("./keys.js");
    console.log("Twitter: ", twitterKeys);

    var client = new tweets({
        consumer_key: twitterKeys.consumer_key,
        consumer_secret: twitterKeys.consumer_secret,
        access_token_key: twitterKeys.access_token_key,
        access_token_secret: twitterKeys.access_token_secret
    });

    var params = { screen_name: '@Yaya' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        } else {
            console.log(error);
        }
    });


} else if (command1 === 'spotify-this-song') {
    console.log("spotify");

  // requests to the Spotify

    var { spotifyKeys } = require("./keys.js");
    console.log("Spotify: ", spotifyKeys);

    var Spotify = require('node-spotify-api');

    console.log(spotifyKeys.consumer_key);
    console.log(spotifyKeys.consumer_secret);

    var spotify = new Spotify({
        id: 'f64302bd58c14fbab0ec923c5818e1ba',
        secret: '68829be093324d27874d479e433b7d11'
    });

    var searchQuery = command2;
    spotify.search({ type: 'track', query: searchQuery, limit: 1 }, function(err, data) {
        if (err) {
            return console.log('Spotify error occurred: ' + err);
        }

        console.log("spotify-this-song: " + searchQuery);

        var songTrack = data.tracks.items;
        console.log(data);

        console.log("Artist: " + songTrack[0].artists[0].name);
        console.log("Album Title: " + songTrack[0].album.name);
        console.log("Spotify Link: " + songTrack[0].preview_url);
        console.log("Track Title: " + songTrack[0].name);

       //  function spofityThis() {
       //      if (searchQuery == null) {
       //          value = 'The Sign';
       //      }

       // } 
        
        });

   

} else if (command1 === 'movie-this') {
// requests to the OMDB
    var request = require("request");

    var movie = command2
    var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&tomatoes=true&apikey=trilogy";

    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {


        if (!error && response.statusCode === 200) {

            var body = (JSON.parse(response.body));

            console.log("Title of the movie: " + body.Title);
            console.log(" Year the movie came out: " + body.Year);
            console.log(" IMDB Rating of the movie: " + body.imdbRating);
            console.log("'Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Country where the movie was produced: " + body.Country);
            console.log("Language of the movie: " + body.Language);
            console.log("Plot of the movie: " + body.Plot);
            console.log("Actors in the movie: " + body.Actors);

            console.log(response);

             //  function movieThis() {
             //  if (searchQuery === null) {
            //  value = 'http://www.imdb.com/title/tt0485947";
            //  }
            // } 
        

        } else {
            console.log(error);

        }

    });

    // do-what-it-says command 

} else if (command1 === "do-what-it-says") {

    var fs = require("fs");

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {

            console.log(error);

        } else {
            console.log(data);

            var dataArr = data.split(",");
            console.log(dataArr);

        command1 = dataArr[0]
        command2 = dataArr [1]
        liriCommand();
        }

    });

};

}

liriCommand();


