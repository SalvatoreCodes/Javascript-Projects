const counterTitle = document.getElementById("counter-title");
const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let value = 0;
let red = 0;
let blue = 0;

let mousedown;

function decreaseHandler() {
  value -= 1;
  counter.textContent = value;
  counter.style.color = "white";
  counterTitle.style.color = "white";

  if (red <= 0) {
    red = 75;
  } else if (red === 255) {
    red = 255;
  }

  blue = 0;
  red += 5;

  document.body.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
}

function increaseHandler() {
  value += 1;
  counter.textContent = value;
  counter.style.color = "white";
  counterTitle.style.color = "white";

  if (blue <= 0) {
    blue = 75;
  } else if (blue === 255) {
    blue = 255;
  }
  red = 0;
  blue += 5;
  document.body.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
}

decrease.addEventListener("click", decreaseHandler);

decrease.addEventListener("mousedown", () => {
  mousedown = setInterval(() => {
    decreaseHandler();
  }, 100);
});

decrease.addEventListener("mouseup", () => {
  clearInterval(mousedown);
});

reset.addEventListener("click", () => {
  value = 0;
  red = 0;
  blue = 0;
  counter.textContent = value;
  counter.style.color = "black";
  counterTitle.style.color = "black";
  document.body.style.backgroundColor = "lightgray";
});

increase.addEventListener("click", increaseHandler);

increase.addEventListener("mousedown", () => {
  mousedown = setInterval(() => {
    increaseHandler();
  }, 100);
});

increase.addEventListener("mouseup", () => {
  clearInterval(mousedown);
});
