let coins = 10;
let diamonds = 10;
let grains = 100;
let carrots = 2000;
let potatoes = 100;
let flowers = 100;

//AMOUNTS
let $grains = document.getElementById("grains");
let $carrots = document.getElementById("carrots");
let $potatoes = document.getElementById("potatoes");
let $flowers = document.getElementById("flowers");
let $coins = document.getElementById("coins");
let $diamonds = document.getElementById("diamonds");
//AMOUNTS

//SELL BUTTONS
let $sellButtonCarrots = document.getElementById("sell-button-carrots");
let $sellButtonPotatoes = document.getElementById("sell-button-potatoes");
let $sellButtonFlowers = document.getElementById("sell-button-flowers");
let $sellButtonGrains = document.getElementById("sell-button-grains");
//SELL BUTTONS

function updateCoinCount() {
  $coins.textContent = coins.toString();
}

function updateDiamondCount() {
  $diamonds.textContent = diamonds.toString();
}

function updateGrainCount() {
  $grains.textContent = grains.toString();
}

function updateCarrotCount() {
  $carrots.textContent = carrots.toString();
}

function updatePotatoCount() {
  $potatoes.textContent = potatoes.toString();
}

function updateFlowerCount() {
  $flowers.textContent = flowers.toString();
}

updateCoinCount();
updateDiamondCount();
updateGrainCount();
updateCarrotCount();
updatePotatoCount();
updateFlowerCount();
function increaseCoins(amount) {
  coins += amount;
  updateCoinCount();
}

function increaseDiamonds() {
  diamonds += 10;
  updateDiamondCount();
}

function increaseGrains() {
  grains += 10;
  updateGrainCount();
}

function increaseCarrots() {
  carrots += 10;
  updateCarrotCount();
}

function increasePotatoes() {
  potatoes += 10;
  updatePotatoCount();
}

function increaseFlowers() {
  flowers += 10;
  updateFlowerCount();
}
$sellButtonCarrots.addEventListener("click", function () {
  if (carrots > 0) {
    increaseCoins(carrots); // Verhoog de munten met het aantal verkochte wortels
    carrots = 0; // Stel het aantal wortels in op 0 nadat ze zijn verkocht
    updateCarrotCount(); // Werk de weergave van het aantal wortels bij in de HTML
  } else {
    console.log("not enough carrots");
  }
});
$sellButtonFlowers.addEventListener("click", function () {
  if (flowers > 0) {
    increaseCoins(flowers); // Verhoog de munten met het aantal verkochte bloemen
    flowers = 0; // Stel het aantal bloemen in op 0 nad
    updateFlowerCount(); // Werk de weergave van het aantal bloemen bij in de HTML
  } else {
    console.log("not enough flowers");
  }
});
$sellButtonGrains.addEventListener("click", function () {
  if (grains > 0) {
    increaseCoins(grains); // Verhoog de munten met het aantal verkochte granen
    grains = 0; // Stel het aantal granen in op 0 nadat ze zijn verkocht
    updateGrainCount(); // Werk de weergave van het aantal granen bij in de HTML
  } else {
    console.log("not enough grains");
  }
});

$sellButtonPotatoes.addEventListener("click", function () {
  if (potatoes > 0) {
    increaseCoins(potatoes); // Verhoog de munten met het aantal verkochte aardappelen
    potatoes = 0; // Stel het aantal aardappelen in op 0 nadat ze zijn verkocht
    updatePotatoCount(); // Werk de weergave van het aantal aardappelen bij in de HTML
  } else {
    console.log("not enough potatoes");
  }
});
