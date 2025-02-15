function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector("#controls");
const inputEl = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value, 10)
  if (amount >= 1 && amount <= 100) {
  createBoxes(amount);
  inputEl.value = "";
  }
});


destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  destroyBoxes();

  const elements = [];
  let size = 30;


  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "5px";
    elements.push(div);
    size += 10;
  }
  
boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; 
}

