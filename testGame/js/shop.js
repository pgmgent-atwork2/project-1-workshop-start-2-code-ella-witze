let $buttonShop = document.getElementById("button-shop");
let $overlayShop = document.getElementById("overlay-shop");
let $shopReturnButton = document.getElementById("shop-return-button");

$buttonShop.addEventListener("click", function () {
  console.log("clicked");
  $overlayShop.classList.toggle("overlay-shop--active");
});

$shopReturnButton.addEventListener("click", function () {
  console.log("clicked");
  $overlayShop.classList.remove("overlay-shop--active");
});
