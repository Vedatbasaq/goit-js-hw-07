const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBox);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const amountNumber = Number(amount);
  boxes.innerHTML = '';
  let size = 30;

  if (amountNumber >= 1 && amountNumber <= 100) {
    for (let i = 0; i < amountNumber; i++) {
      const div = document.createElement('div');

      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(div);

      size += 10;
    }
  }
}
function destroyBox() {
  boxes.innerHTML = '';
}