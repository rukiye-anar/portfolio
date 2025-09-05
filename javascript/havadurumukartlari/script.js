document.addEventListener("DOMContentLoaded", () => {
  let weatherJSONData = {};
  const citySelect = document.getElementById("city-select");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const imgSelect = document.getElementById("image");
  fetch("weather.json")
    .then((response) => response.json())
    .then((data) => {
      weatherJSONData = data;
      console.log(data);
      citySelect.value = "Istanbul";
      updateWeather("Istanbul");
    })
    .catch((err) => console.error("JSON yüklenmedi: ", err));
  function updateWeather(selectedCity) {
  const cityData = weatherJSONData[selectedCity];
  if (!cityData) {
    console.error("Veri bulunamadı:", selectedCity);
    return;
  } 

  cityName.textContent = selectedCity;
  imgSelect.src= `${cityData.image} `;
  temperature.textContent = `Sıcaklık: ${cityData.temperature}`;
  description.textContent = `Durum: ${cityData.description}`;
}
  citySelect.addEventListener("change", function () {
    const selectedCity = citySelect.value;
    updateWeather(selectedCity);
  });

  
});
