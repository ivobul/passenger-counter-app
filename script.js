const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const saveBtn = document.getElementById("save-btn");
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
let count = 0;

increaseBtn.addEventListener("click", () => {
  countEl.innerText = ++count;
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    countEl.innerText = --count;
  } 
});

saveBtn.addEventListener("click", () => {
  saveEl.innerText += ` ${count} - `;
  countEl.innerText = 0;
  count = 0;
});

