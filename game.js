let nextThing = "X";
let count = 0;

const gridBoxes = Array.from(document.getElementsByClassName("grid-box"));
// const playButtons = Array.from(document.getElementsByTagName("button"));
console.log(gridBoxes[0].innerHTML);

const endGame = (boxes, counter) => {
  for (counter; counter < 9; counter++) {
    if (boxes[0].innerHTML === boxes[1].innerHTML === boxes[2].innerHTML) {
      // boxes.innerHTML = "";
      boxes.querySelectorAll.innerHTML = " ";
    }
  }
  return counter = 0;
}

const listenerFunction = (box) => {
  box.addEventListener("click", () => handleClick(box));
  count++;
  endGame(gridBoxes, count);
}
// playButtons.forEach(listenerFunction);
gridBoxes.forEach(listenerFunction);

const handleClick = (box) => {
  // add a class called clicked so that when clicked again doesn't change using .classlist .contains ; use a loop inside this function
  // if box.classlist.contains("clicked") {break}
  box.innerHTML = nextThing; 
  nextThing === "X" ? nextThing = "O" : nextThing = "X";
  // let nextThing;
  // pButton === playButtons[0] ? nextThing = "X" : nextThing = "O";
  // box.innerHTML = nextThing; 
  // nextThing === "X" ? nextThing = "O" : nextThing = "X";
};
