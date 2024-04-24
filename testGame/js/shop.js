let carrotFertilizer = { price: 10, level: 0 };
let potatoFertilizer = { price: 20, level: 0 };
let flowerFertilizer = { price: 30, level: 0 };
let grainFertilizer = { price: 40, level: 0 };

//AMOUNTS

let $carrotFertilizerLvl = document.getElementById("carrot-fertilizer-lvl");
let $potatoFertilizerLvl = document.getElementById("potato-fertilizer-lvl");
let $flowerFertilizerLvl = document.getElementById("flower-fertilizer-lvl");
let $grainFertilizerLvl = document.getElementById("grain-fertilizer-lvl");
//AMOUNTS

//BUTTONS
let $buyCarrotFertilizer = document.getElementById("buy-carrot-button");
let $buyPotatoFertilizer = document.getElementById("buy-potato-button");
let $buyFlowerFertilizer = document.getElementById("buy-flower-button");
let $buyGrainFertilizer = document.getElementById("buy-grain-button");

//BUTTONS

function updateCarrotFertilizerCount() {
  $carrotFertilizerLvl.textContent = carrotFertilizer.level;
}

function updatePotatoFertilizerCount() {
  $potatoFertilizerLvl.textContent = potatoFertilizer.level;
}

function updateFlowerFertilizerCount() {
  $flowerFertilizerLvl.textContent = flowerFertilizer.level;
}

function updateGrainFertilizerCount() {
  $grainFertilizerLvl.textContent = grainFertilizer.level;
}
updateCarrotFertilizerCount();
updatePotatoFertilizerCount();
updateFlowerFertilizerCount();
updateGrainFertilizerCount();

$buyCarrotFertilizer.addEventListener("click", buyCarrotFertilizer);
$buyPotatoFertilizer.addEventListener("click", buyPotatoFertilizer);
$buyFlowerFertilizer.addEventListener("click", buyFlowerFertilizer);
$buyGrainFertilizer.addEventListener("click", buyGrainFertilizer);

function buyCarrotFertilizer() {
  let $buyCarrotButton = document.getElementById("buy-carrot-button");
  if (coins.value >= 10) {
    coins.value -= carrotFertilizer.price;
    carrotFertilizer.level += 1;
    updateCoinCount();
    updateCarrotFertilizerCount();
    $buyCarrotButton.classList.remove("no-money");
  } else {
    $buyCarrotButton.classList.add("no-money");
  }
}

function buyPotatoFertilizer() {
  let $buyPotatoButton = document.getElementById("buy-potato-button");
  if (coins.value >= 20) {
    coins.value -= potatoFertilizer.price;
    potatoFertilizer.level += 1;
    updateCoinCount();
    updatePotatoFertilizerCount();
    $buyPotatoButton.classList.remove("no-money");
  } else {
    $buyPotatoButton.classList.add("no-money");
  }
}

function buyFlowerFertilizer() {
  let $buyFlowerButton = document.getElementById("buy-flower-button");
  if (coins.value >= 30) {
    coins.value -= flowerFertilizer.price;
    flowerFertilizer.level += 1;
    updateCoinCount();
    updateFlowerFertilizerCount();
    $buyFlowerButton.classList.remove("no-money");
  } else {
    $buyFlowerButton.classList.add("no-money");
  }
}

function buyGrainFertilizer() {
  let $buyGrainButton = document.getElementById("buy-grain-button");
  if (coins.value >= 40) {
    coins.value -= grainFertilizer.price;
    grainFertilizer.level += 1;
    updateCoinCount();
    updateGrainFertilizerCount();
    $buyGrainButton.classList.remove("no-money");
  } else {
    $buyGrainButton.classList.add("no-money");
  }
}
