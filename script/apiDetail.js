const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '692850f7b6msh402daba8277d965p1f4a13jsnc25adf665791',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};


// if(id){
//     fetch('https://imdb-top-100-movies.p.rapidapi.com/'+id, options)
// 	.then(response => response.json())
// 	.then(response => getInfo(response))
// 	.catch(err => console.error(err))
// }
const json = {
    "rank": 2,
    "title": "The Godfather",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "rating": "9.2",
    "id": "top2",
    "year": 1972,
    "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    "trailer": "https://www.youtube.com/embed/rqGJyUB1Q3s",
    "genre": [
        "Crime",
        "Drama"
    ],
    "director": [
        "Francis Ford Coppola"
    ],
    "writers": [
        "Mario Puzo (screenplay by)",
        "Francis Ford Coppola (screenplay by)"
    ],
    "imdbid": "tt0068646"
}
getInfo(json)
function getInfo(json){
    document.getElementById('mTitle').textContent = json.title
    document.getElementById('mImg').src = json.image
    document.getElementById('mImg').setAttribute('alt',json.title)
    document.getElementById('mRank').textContent='Rank #'+json.rank
    document.getElementById('mRating').textContent=json.rating
    document.getElementById('mDesc').textContent = json.description
    document.getElementById('mDirector').textContent = json.director.join(', ')
    document.getElementById('mGenre').textContent = json.genre.join(', ')
    document.getElementById('mReleased').textContent = json.year
    document.getElementById('mTrailer').src = json.trailer

    
    // {
    //     "rank": 2,
    //     "title": "The Godfather",
    //     "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    //     "rating": "9.2",
    //     "id": "top2",
    //     "year": 1972,
    //     "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    //     "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    //     "trailer": "https://www.youtube.com/embed/rqGJyUB1Q3s",
    //     "genre": [
    //         "Crime",
    //         "Drama"
    //     ],
    //     "director": [
    //         "Francis Ford Coppola"
    //     ],
    //     "writers": [
    //         "Mario Puzo (screenplay by)",
    //         "Francis Ford Coppola (screenplay by)"
    //     ],
    //     "imdbid": "tt0068646"
    // }
    console.log(json)

}