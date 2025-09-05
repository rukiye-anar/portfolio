document.addEventListener("DOMContentLoaded", () => {
  const letter = document.getElementById("letter");
  document.addEventListener("keydown", function (event) {
    /* if(event.key === "b"){
            document.body.style.backgroundColor = "blue"
           letter.innerHTML = "B";
        }*/
    fetch("letters.json")
      .then((res) => res.json())
      .then((data) => {
        letterData = data;
      });
    const choose = letterData.find((item) => item.key === event.key);
    if (choose) {
      document.body.style.backgroundColor = choose.color;
      letter.innerHTML = choose.letter;
    }
  });
});
