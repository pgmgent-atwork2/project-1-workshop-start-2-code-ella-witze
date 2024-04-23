let carrotFertilizer = 0;
let potatoFertilizer = 0;
let flowerFertilizer = 10;
let grainFertilizer = 0;

//AMOUNTS

let $carrotFertilizerLvl = document.getElementById("carrot-fertilizer-lvl");
let $potatoFertilizerLvl = document.getElementById("potato-fertilizer-lvl");
let $flowerFertilizerLvl = document.getElementById("flower-fertilizer-lvl");
let $grainFertilizerLvl = document.getElementById("grain-fertilizer-lvl");
//AMOUNTS

//BUTTONS
let $buyCarrotFertilizer = document.getElementById("buy-carrots-button");
let $buyPotatoFertilizer = document.getElementById("buy-potatoes-button");
let $buyFlowerFertilizer = document.getElementById("buy-flowers-button");
let $buyGrainFertilizer = document.getElementById("buy-grains-button");

//BUTTONS

function updateCarrotFertilizerCount() {
  $carrotFertilizerLvl.textContent = carrotFertilizer.toString();
}

function updatePotatoFertilizerCount() {
  $potatoFertilizerLvl.textContent = potatoFertilizer.toString();
}

function updateFlowerFertilizerCount() {
  $flowerFertilizerLvl.textContent = flowerFertilizer.toString();
}

function updateGrainFertilizerCount() {
  $grainFertilizerLvl.textContent = grainFertilizer.toString();
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
  if (coins >= 10) {
    coins -= 10;
    carrotFertilizer += 1;
    updateCoinCount();
    updateCarrotFertilizerCount();
  }
}

function buyPotatoFertilizer() {
  if (coins >= 10) {
    coins -= 10;
    potatoFertilizer += 1;
    updateCoinCount();
    updatePotatoFertilizerCount();
  }
}

function buyFlowerFertilizer() {
  if (coins >= 10) {
    coins -= 10;
    flowerFertilizer += 1;
    updateCoinCount();
    updateFlowerFertilizerCount();
  }
}

function buyGrainFertilizer() {
  if (coins >= 10) {
    coins -= 10;
    grainFertilizer += 1;
    updateCoinCount();
    updateGrainFertilizerCount();
  }
}
