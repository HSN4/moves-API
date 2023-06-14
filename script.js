const API_URL ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f12ad871d9d7d25cd8608327dbc98d8e';
const IMG_URL ='https://image.tmdb.org/t/p/w500';

const main = document.querySelector('.main')



fetch(API_URL).then(res => res.json()).then(data =>{
    showMovie(data.results)
})

function showMovie(data){
    data.forEach(movie => {
        let {title ,poster_path ,overview,vote_average,release_date} = movie;
        let movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML=
                                                                                   
        `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        
        <div class="movie-info">
            <h1>${title}</h1>
            <h2>${release_date}</h2>
            <span class="green">${vote_average}</span>
        </div> 
        
        <div class="overviwe">
             <h4>Overview :</h4>
            ${overview}
        </div>
        `
        
        main.appendChild(movieEl)
    });
}