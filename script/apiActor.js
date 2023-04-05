const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '692850f7b6msh402daba8277d965p1f4a13jsnc25adf665791',
		'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com'
	}
};
const $search = document.getElementById('searchBar');
const $form = document.getElementById('sForm');


$form.addEventListener('submit', async function (e) {
    e.preventDefault()
    console.log($search.value)

    fetch('https://actor-movie-api1.p.rapidapi.com/getid/'+$search.value+'?apiKey=62ffac58c57333a136053150eaa1b587', options)
	.then(response => response.json())
	.then(response => buildList(response))
	.catch(err => console.error(err));
})

function buildList(json){
    let tempHtml=""
    console.log(json)
    console.log('!!!!'+json.length)
    for (let i=0;i<json.length ;i++)
    {
        let template = `
        <div class="col">
            <div class="card m-3">
                <div class="row g-0">
                    <div class="col-xs-5 col-sm-6 col-md-5">
                        <img src="https://image.tmdb.org/t/p/w342/${json[i].poster_path}"
                            class="img-fluid" alt="${json[i].title}">
                    </div>
                    <div class="col-xs-7 col-sm-6 col-md-7 ">
                        <div class="card-body">
                            <h5 class="card-title">Title : ${json[i].title} </h5>
                            <p class="card-text">
                                <b>Released Date:</b> ${json[i].release_date}
                            </p>
                            <p class="card-text">
                                <b>character:</b> ${json[i].character}
                            </p>
                            <p class="card-text">
                                <b>Description:</b> ${json[i].overview}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        tempHtml = tempHtml + template
    }
    $('#actorList').html(tempHtml)

}
