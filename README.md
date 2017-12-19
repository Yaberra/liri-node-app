# liri-node-app

Setup: 


1. Initialize a 'package.json' and install twitter, node-spotify-api and request 

2. Make a .gitignore file.This will tell git not to track these files, and thus they won't be committed to Github.

3. Make a keys.js to store access keys to twitter and spotify 

Programme: 

4. Set two arguments to take the LIRI commands and third argument for position that is a feature of the LIRI command for instance, song title, movie title etc. 

5. Created a a liriCommand function for all of liri's commands: 

		- my-tweets 

		- spotify-this-song

		- movie-this" and 

		- do-what-it-says

6. Used the use the request package to retrieve data for twitter, spotify and OMDB  

7. For node liri.js spotify-this-song  it shows information in the terminal/bash window for 

		* Artist(s)

		* The song's name

		* A preview link of the song from Spotify and 

		* The album that the song is from 

8. For OMDB the information in the terminal/bash Window shows: 

		* Title of the movie.

		* Year the movie came out.

		* IMDB Rating of the movie.

		* Rotten Tomatoes Rating of the movie.

		* Country where the movie was produced.

		* Language of the movie.

		* Plot of the movie.

		* Actors in the movie.
  

9. Made a file called `random.txt`.

		* Inside of `random.txt` put the following 
     
		* spotify-this-song,"I Want it That Way"

		* Used the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
		
		* It runs the `spotify-this-song` for "I Want it That Way," as in the `random.txt` file
     
  
   















