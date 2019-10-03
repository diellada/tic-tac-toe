//when button click - the first clicked gridbox value is the value of the button
//then after that interchanges between two values

const playerButtons = [...document.getElementsByTagName("button")];
const gridBoxes = [...document.getElementsByClassName("grid-box")];
let currentSymbol = 'X';
// let position =0;

const buttonListener = (pButton => {
  pButton.addEventListener("click", () => onButtonClick(event));
});

playerButtons.forEach(buttonListener);

const onButtonClick = (event) => {
  currentSymbol = event.target.value;
  firstSymbol = event.target.value;
  // console.log(firstSymbol);
  // Remove symbole select event listener
  // playerButtons.forEach( () => {
    // playerButtons.removeEventListener("click", event, false);
  // })
  gridBoxes.forEach(gridListener);
}

const gridListener = (box) => {
  box.addEventListener("click", () => onBoxClick(event));
};

const onBoxClick = (event) => {
  event.target.innerHTML = currentSymbol;
  checkWinner();
  currentSymbol === "X" ? currentSymbol = "O" : currentSymbol = "X";
  console.log(currentSymbol);
}

const endGame = () => {
  document.getElementById("grid-container").style.backgroundColor = "red";
  alert("Game has ended!");
  location.reload();
}

const checkWinner = () => {
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 4, 6], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]
  ];

  const winningCombos = combos.filter(checkCombo);
  if (winningCombos.length > 0) {
    endGame();
  }
}

const checkCombo = (combo) => {
  const matchingCells = combo.filter(checkPosition)
  return matchingCells.length === 3;
}

const checkPosition = (position) => {
  return gridBoxes[position].innerHTML === currentSymbol;
}