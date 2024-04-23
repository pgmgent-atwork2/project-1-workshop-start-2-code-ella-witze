let coins = { value: 1000 };
let diamonds = { value: 10 };
let grains = { value: 0, price: 10 };
let carrots = { value: 0, price: 1 };
let potatoes = { value: 0, price: 20 };
let flowers = { value: 0, price: 4 };

//AMOUNTS
let $grains = document.getElementById("grains");
let $carrots = document.getElementById("carrots");
let $potatoes = document.getElementById("potatoes");
let $flowers = document.getElementById("flowers");
let $coins = document.getElementById("coins");
let $diamonds = document.getElementById("diamonds");
let $shopCoins = document.getElementById("shop-coins");
let $shopDiamonds = document.getElementById("shop-diamonds");
//AMOUNTS

//SELL BUTTONS
let $sellButtonCarrots = document.getElementById("sell-button-carrots");
let $sellButtonPotatoes = document.getElementById("sell-button-potatoes");
let $sellButtonFlowers = document.getElementById("sell-button-flowers");
let $sellButtonGrains = document.getElementById("sell-button-grains");
//SELL BUTTONS

function updateCoinCount() {
  $coins.textContent = coins.value;
  $shopCoins.textContent = coins.value;
}

function updateDiamondCount() {
  $diamonds.textContent = diamonds.value;
  $shopDiamonds.textContent = diamonds.value;
}

function updateGrainCount() {
  $grains.textContent = grains.value;
}

function updateCarrotCount() {
  $carrots.textContent = carrots.value;
}

function updatePotatoCount() {
  $potatoes.textContent = potatoes.value;
}

function updateFlowerCount() {
  $flowers.textContent = flowers.value;
}

updateCoinCount();
updateDiamondCount();
updateGrainCount();
updateCarrotCount();
updatePotatoCount();
updateFlowerCount();
function increaseCoins(amount) {
  coins.value += amount;
  updateCoinCount();
}

function increaseDiamonds(amount) {
  diamonds.value += amount;
  updateDiamondCount();
}

function increaseGrains(amount) {
  grains.value += amount;
  updateGrainCount();
}

function increaseCarrots(amount) {
  carrots.value += amount;
  updateCarrotCount();
}

function increasePotatoes(amount) {
  potatoes.value += amount;
  updatePotatoCount();
}

function increaseFlowers(amount) {
  flowers.value += amount;
  updateFlowerCount();
}

$sellButtonCarrots.addEventListener("click", function () {
  if (carrots.value > 0) {
    increaseCoins(carrots.value * carrots.price);
    carrots.value = 0;
    updateCarrotCount();
  } else {
    console.log("not enough carrots");
  }
});
$sellButtonFlowers.addEventListener("click", function () {
  if (flowers.value > 0) {
    increaseCoins(flowers.value * flowers.price);
    flowers.value = 0;
    updateFlowerCount();
  } else {
    console.log("not enough flowers");
  }
});

$sellButtonPotatoes.addEventListener("click", function () {
  if (potatoes.value > 0) {
    increaseCoins(potatoes.value * potatoes.price);
    potatoes.value = 0;
    updatePotatoCount();
  } else {
    console.log("not enough potatoes");
  }
});

$sellButtonGrains.addEventListener("click", function () {
  if (grains.value > 0) {
    increaseCoins(grains.value * grains.price);
    grains.value = 0;
    updateGrainCount();
  } else {
    console.log("not enough grains");
  }
});
