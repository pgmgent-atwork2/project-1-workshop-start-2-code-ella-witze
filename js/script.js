document.addEventListener("DOMContentLoaded", function () {
  //dit spreekt de 2 de roos aan
  const $roseSVG = document.getElementsByClassName("rose-svg")[1];
  const $roseColorInput = document.getElementById("roseColorInput");
  const $next = document.getElementById("next");

  $next.addEventListener("click", function () {
    console.log("done");

    if ($roseSVG) {
      $roseSVG.classList.toggle("green"); // Voeg de klasse "green" toe aan het geselecteerde SVG-element
    } else {
      console.error("Element with class 'rose-svg' not found.");
    }
    randomFlower();
  });
});

const $exampleRoseSVGs = document.querySelectorAll(".rose-svg");

let randomFlower = function () {
  let flowers = ["blue", "green", "purple", "red", "yellow"];
  $exampleRoseSVGs.forEach(function ($exampleRoseSVG) {
    randomIndex = Math.floor(Math.random() * flowers.length);
    $exampleRoseSVG.classList.remove(
      "blue",
      "green",
      "purple",
      "red",
      "yellow"
    );
    $exampleRoseSVG.classList.toggle(flowers[randomIndex]);
  });
};
