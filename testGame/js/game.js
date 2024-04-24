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
  $buyCarrotFertilizer.classList.remove("no-money");
  $buyPotatoFertilizer.classList.remove("no-money");
  $buyFlowerFertilizer.classList.remove("no-money");
  $buyGrainFertilizer.classList.remove("no-money");
});

function handleClick(vegetable, time, fertilizer) {
  return function (event) {
    const questions = [
      "With which CSS property can you change a background color?",
      "What is the correct HTML element for inserting a line break?",
      "Which HTML attribute is used to define inline styles?",
      "What is the correct JavaScript syntax to change the content of an HTML element?",
      "How do you create a function in JavaScript?",
      "How do you call a function named 'myFunction'?",
      "How do you write an IF statement in JavaScript?",
      "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
      "How does a WHILE loop start?",
      "How does a FOR loop start?",
      "How do you add a comment in JavaScript?",
      "What is the correct way to write a JavaScript array?",
      "How do you round the number 7.25, to the nearest integer?",
      "Which event occurs when the user clicks on an HTML element?",
      "Which operator is used to assign a value to a variable?",
      "What will the following code return: Boolean(10 > 9)",
      "Is JavaScript case-sensitive?",
      "How can you detect the client's browser name?",
      "Which function returns the length of a string?",
      "What is the correct way to include an external JavaScript file?",
    ];

    const answers = [
      ["(1) background-color", "(2) color", "(3) font-size"],
      ["(1) br", "(2) break", "(3) lb"],
      ["(1) class", "(2) style", "(3) font"],
      [
        "(1) document.getElement('p').innerHTML = 'Hello World!';",
        "(2) document.getElementById('demo').innerHTML = 'Hello World!';",
        "(3) document.getElementByName('p').innerHTML = 'Hello World!';",
      ],
      [
        "(1) function:myFunction()",
        "(2) function = myFunction()",
        "(3) function myFunction()",
      ],
      [
        "(1) myFunction()",
        "(2) call function myFunction()",
        "(3) function.call('myFunction')",
      ],
      ["(1) if (i == 5)", "(2) if i = 5 then", "(3) if i = 5"],
      ["(1) if (i != 5)", "(2) if i <> 5", "(3) if (i <> 5)"],
      [
        "(1) while (i <= 10)",
        "(2) while (i <= 10; i++)",
        "(3) while i = 1 to 10",
      ],
      [
        "(1) for (i = 0; i <= 5; i++)",
        "(2) for (i = 0; i <= 5)",
        "(3) for i = 1 to 5",
      ],
      [
        "(1) //This is a comment",
        "(2) <!--This is a comment-->",
        "(3) 'This is a comment'",
      ],
      [
        "(1) var colors = ['red', 'green', 'blue']",
        "(2) var colors = 'red', 'green', 'blue'",
        "(3) var colors = (1:'red', 2:'green', 3:'blue')",
      ],
      ["(1) Math.round(7.25)", "(2) round(7.25)", "(3) Math.rnd(7.25)"],
      ["(1) onchange", "(2) onclick", "(3) onmouseover"],
      ["(1) =", "(2) *", "(3) x"],
      ["(1) True", "(2) False", "(3) Undefined"],
      ["(1) Yes", "(2) No", "(3) Sometimes"],
      ["(1) navigator.appName", "(2) browser.name", "(3) client.browser"],
      ["(1) length()", "(2) len()", "(3) size()"],
      [
        "(1) <script src='xxx.js'>",
        "(2) <script href='xxx.js'>",
        "(3) <script name='xxx.js'>",
      ],
    ];

    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    const options = answers[randomIndex];
    const correctAnswer = options[0];

    const selectedOptionIndex = parseInt(
      window.prompt(question + "\n" + options.join("\n"))
    );

    const selectedAnswer = options[selectedOptionIndex - 1];

    if (selectedAnswer === correctAnswer) {
      event.target.classList.toggle("aker--correct");
      setTimeout(() => {
        event.target.classList.toggle("aker--correct");
        vegetable.value++; // Assuming vegetable is an object with a 'value' property
        updateCarrotCount(); // Ensure this function exists and updates the UI
        updateFlowerCount();
        updateGrainCount();
        updatePotatoCount();
      }, time - fertilizer * 50);
    }
  };
}

const $carrotGridItems = document.querySelectorAll(".aker__carrot");
$carrotGridItems.forEach((item) => {
  item.addEventListener(
    "click",
    handleClick(carrots, 10000, carrotFertilizer.level)
  );
});
const $flowerGridItems = document.querySelectorAll(".aker__flower");
$flowerGridItems.forEach((item) => {
  item.addEventListener(
    "click",
    handleClick(flowers, 20000, flowerFertilizer.level)
  );
});
const $grainGridItems = document.querySelectorAll(".aker__grain");
$grainGridItems.forEach((item) => {
  item.addEventListener(
    "click",
    handleClick(grains, 30000, grainFertilizer.level)
  );
});
const $potatoGridItems = document.querySelectorAll(".aker__potato");
$potatoGridItems.forEach((item) => {
  item.addEventListener(
    "click",
    handleClick(potatoes, 40000, potatoFertilizer.level)
  );
});
