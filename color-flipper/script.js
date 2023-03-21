const clickHandler = document.getElementById("clickHandler");
const colorName = document.getElementById("colorName");

let index;
let prevIndex = [null];

const colors = [
  "red",
  "blue",
  "green",
  "white",
  "black",
  "orange",
  "purple",
  "pink",
  "yellow",
  "gray",
];

// I made this so that it doesn't display the same color twice

function indexGenerator() {
  prevIndex.push(index);
  prevIndex.shift();
  index = Math.floor(Math.random() * colors.length);
  console.log(index);
  console.log(prevIndex);
  if (prevIndex[0] === index) {
    indexGenerator();
  } else {
    document.body.style.backgroundColor = colors[index];
    colorName.textContent = `COLOR: ${colors[index]}`;
  }
}

clickHandler.addEventListener("click", indexGenerator);
