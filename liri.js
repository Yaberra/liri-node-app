var command1 = process.argv[2];
var command2 = process.argv[3];

if (command1 === 'my-tweets') {
    console.log('twitter');

	var tweets = require('twitter');
    var {twitterKeys} = require("./keys.js");
    console.log("Twitter: " , twitterKeys);

	var client = new tweets ({
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

	var {spotifyKeys} = require("./keys.js");
    console.log("Spotify: " , spotifyKeys);

	var Spotify = require('node-spotify-api');
   
    console.log(spotifyKeys.consumer_key);
    console.log(spotifyKeys.consumer_secret);

    var spotify = new Spotify({
        id: 'f64302bd58c14fbab0ec923c5818e1ba',
        secret: '68829be093324d27874d479e433b7d11',

    });

    spotify

        .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
        .then(function(data) {
            console.log(data);

        var spotify =(JSON.parse(data.spotify));
        console.log(spotify);

        console.log("Artist(s): "  + spotify.artists.name);
		console.log("The song's name: "  + spotify.name);
		console.log("A preview link of the song from Spotify: "  + spotify.preview_url);
		console.log("The album that the song is from: "  + spotify.album.name);

        })
        .catch(function(err) {
            console.error('Error occurred: ' + err);
        });

// If no song is provided then your program will default to "The Sign" by Ace of Base.

} else if (command1 === 'movie-this') {

    var request = require("request");
    var queryUrl = "http://www.omdbapi.com/?t=Star+Wars=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {


        if (!error && response.statusCode === 200) {
		
		var body = (JSON.parse(response.body));

		console.log("Title of the movie: "  + body.Title);
		console.log(" Year the movie came out: "  + body.Year);
		console.log(" IMDB Rating of the movie: "  + body.imdbRating);
		// console.log("Rotten Tomatoes Rating of the movie : " + body.Rating[1].Value);
		console.log("Country where the movie was produced: "  + body.Country);
		console.log("Language of the movie: "  + body.Language);
		console.log("Plot of the movie: "  + body.Plot);
		console.log("Actors in the movie: "  + body.Actors);
        
        console.log(response);

        } else {
         console.log(error);

        }

    });
};

// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

// It's on Netflix!

var fs = require("fs");
	fs.readFile("random.txt", "utf8", function(error, data) {
 	
 	if (error) {
 	
 	console.log(data);
  
 	} else {
         console.log(error);
    }

  	var dataArr = data.split(",");
  	console.log(dataArr);
  	
});


