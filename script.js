// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://imdb-top-100-movies.p.rapidapi.com/",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "692850f7b6msh402daba8277d965p1f4a13jsnc25adf665791",
// 		"X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://imdb-top-100-movies.p.rapidapi.com/top1",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "692850f7b6msh402daba8277d965p1f4a13jsnc25adf665791",
// 		"X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://actor-movie-api1.p.rapidapi.com/getid/cruise?apiKey=62ffac58c57333a136053150eaa1b587",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "692850f7b6msh402daba8277d965p1f4a13jsnc25adf665791",
		"X-RapidAPI-Host": "actor-movie-api1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
