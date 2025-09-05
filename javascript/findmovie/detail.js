document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    if (movieId) {
        fetchMovieDetails(movieId);
    } else {
        document.body.innerHTML = "<h1>Film ID'si bulunamadı!</h1>";
    }
});
function fetchMovieDetails(id) {
    const apiKey = "a86c7d92";
    const apiUrl = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}&plot=full`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            displayMovieDetails(data);
        });
}
function displayMovieDetails(movie) {
    document.getElementById("movie-detail-container").innerHTML = `
        <h1>${movie.Title}</h1>
        <img src="${movie.Poster}">
        <p>${movie.Plot}</p>
        <p><strong>Yönetmen:</strong> ${movie.Director}</p>
        <p><strong>IMDB Puanı:</strong> ${movie.imdbRating}</p>
    `;
     document.getElementById("back-button").addEventListener("click",()=>{
         history.back();
  })
}