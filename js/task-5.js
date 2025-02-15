function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getBackgroundColor() {
  const body = document.querySelector(`body`);
  const newBackgroundColor = getRandomHexColor();
  body.style.backgroundColor = newBackgroundColor;
}

function renderColor() {
  let output = document.querySelector(`.color`);
  const newBackgroundColor = getRandomHexColor();
  output.textContent = `${newBackgroundColor}`;
}

const button = document.querySelector(`.change-color`);
button.addEventListener(`click`, getBackgroundColor);
button.addEventListener(`click`, renderColor);




