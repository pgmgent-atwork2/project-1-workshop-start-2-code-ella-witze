let $buttonWallet = document.getElementById("button-wallet");
let $overlayWallet = document.getElementById("overlay-wallet");
let $walletReturnButton = document.getElementById("wallet-return-button");

$buttonWallet.addEventListener("click", function () {
  console.log("clicked");
  $overlayWallet.classList.toggle("overlay-wallet--active");
});

$walletReturnButton.addEventListener("click", function () {
  console.log("clicked");
  $overlayWallet.classList.remove("overlay-wallet--active");
});
