
document.addEventListener('DOMContentLoaded', () => {
    const lastResults = JSON.parse(sessionStorage.getItem('lastSearchResults'));
    const resultArea = document.getElementById("movie-results");
    if (lastResults) {
        displayMovies(lastResults);
    }
    document.getElementById("search-button").addEventListener("click", function() {
        const movieName = document.getElementById("movie-input").value.trim();
        if (movieName !== "") {
            searchMovies(movieName);
        }
        else if (movieName == "")
        {
            window.alert("Lütfen Film İsmi Giriniz.");
            resultArea.innerHTML = "";
        }
    });
});
function searchMovies(name) {
  fetch(`https://www.omdbapi.com/?s=${name}&apikey=a86c7d92`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "True") {
        sessionStorage.setItem('lastSearchResults', JSON.stringify(data.Search));
        displayMovies(data.Search);
      } else {
        document.getElementById("movie-results").innerHTML = "<p>Film bulunamadı.</p>";
      }
    })
    .catch(err => {
      document.getElementById("movie-results").innerHTML = "<p>Bir hata oluştu.</p>";
      console.error(err);
    });
}

function displayMovies(movies) {
  const resultArea = document.getElementById("movie-results");
  resultArea.innerHTML = "";
  

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.width = "200px";
    card.style.display = "inline-block";
    card.style.verticalAlign = "top";
    card.style.textAlign = "center";
   
    const poster = document.createElement("img");
    poster.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg";
    poster.alt = "Poster";
    poster.style.width = "100%";

    const title = document.createElement("h4");
    title.textContent = `${movie.Title} (${movie.Year})`;

    card.appendChild(poster);
    card.appendChild(title);
    card.addEventListener("click", function() {
         const movieId = movie.imdbID;
         window.location.href = `detail.html?id=${movieId}`;
    });
    resultArea.appendChild(card);
  });
 

}

