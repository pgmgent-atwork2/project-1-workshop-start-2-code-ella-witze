let $overlayTutorialBtn = document.getElementById("overlay-tutorial-btn");
let $overlayTutorial = document.getElementById("overlay-tutorial");
let $overlayContent = document.getElementById("overlay-content");
let $overlayCloseBtn = document.getElementById("close-overlay");

$overlayTutorialBtn.addEventListener("click", function () {
  $overlayTutorial.classList.add("shown");
});

$overlayCloseBtn.addEventListener("click", function () {
  $overlayTutorial.classList.remove("shown");
});
