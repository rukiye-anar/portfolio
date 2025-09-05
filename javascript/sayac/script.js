const sayi = document.getElementById("sayi");
const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
document.addEventListener("DOMContentLoaded", () => {
  let sayac = 0;
  let intervalID;
  sayi.innerHTML = sayac;
  button.addEventListener("click", function () {
    sayac++;
    sayi.innerHTML = sayac;
     button4.disabled = false;
     button5.disabled = false;
  });
  button2.addEventListener("click", function () {
    sayac--;
    sayi.innerHTML = sayac;
     button4.disabled = false;
     button5.disabled = false;
    
  });
  button3.addEventListener("click", function () {
    sayac = 0;
    sayi.innerHTML = sayac;
     button4.disabled = false;
     button5.disabled = false;
   
  });
  button4.addEventListener("click", function () {
    intervalID = setInterval(() => {
      sayac++;
      sayi.innerHTML = sayac;
    }, 1000);
    button4.disabled = true;
     button5.disabled = false;
  });
  button5.addEventListener("click", function () {
    clearInterval(intervalID);
    sayi.innerHTML = sayac;
     button4.disabled = false;
     button5.disabled = true;
  });
});
