const inputEl = document.querySelector("#name-input");
const outputEL = document.querySelector("#name-output");

outputEL.dataset.default = "Anonymous";


inputEl.addEventListener("input", () => {
    outputEL.textContent = inputEl.value.trim() || outputEL.dataset.default;
});
