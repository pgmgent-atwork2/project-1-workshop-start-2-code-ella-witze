let $buttonWallet = document.getElementById("button-wallet");
let $overlayWallet = document.getElementById("overlay-wallet");
let $returnButton = document.getElementById("return-button");

$buttonWallet.addEventListener("click", function () {
  console.log("clicked");
  $overlayWallet.classList.toggle("overlay-wallet--active");
});
$returnButton.addEventListener("click", function () {
  console.log("clicked");
  $overlayWallet.classList.remove("overlay-wallet--active");
});
