document.addEventListener("DOMContentLoaded", () => {
  const findMovie = document.getElementById("find-movie");
  const button = document.getElementById("button");

  let movieJSONData = {};
  fetch("movie.json")
    .then((response) => response.json())
    .then((data) => {
      movieJSONData = data;
      console.log(data);
    });
  button.addEventListener("click", () => {
    const inputValue = findMovie.value.trim().toLowerCase();
    const result = movieJSONData.find(
      (movie) => movie.title.toLowerCase() === inputValue
    );

    const resultDiv = document.getElementById("result");
    if (result) {
      resultDiv.innerHTML = `<h3>${result.title}</h3><p>${result.year} - ${result.genre}</p>`;
    } else {
      resultDiv.innerHTML = "<p>Film bulunamadı.</p>";
    }
  });
});
