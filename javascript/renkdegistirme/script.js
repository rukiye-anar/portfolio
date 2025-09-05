document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("tools");
  const button = document.getElementById("change");
  const colors = {
    red: "#E53935",
    pink: "#EC407A",
    purple: "#9C27B0",
    blue: "#42A5F5",
    green: "#43A047",
    yellow: "#FFEB3B",
    orange: "#F57C00",
  };
  button.addEventListener("click", () => {
    const keys = Object.keys(colors);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    div.style.background = colors[randomKey];
  });
});
