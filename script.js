// create a variable for the parent div
const parentDiv = document.querySelector(".parent__div");
// Create a variable for the pop-up modal
const modal = document.querySelector(".modal");

// FUNCTIONS AND VARIABLES FOR LOSING THE GAME
// function to pick div and assign "lose" id to it
function assignLoseId() {
  // generate a random number between 0 and 15 and store it in a variable
  const randomNumber = Math.floor(Math.random() * 15);
  // store the array of divs with the class "rowChild__div" in a variable
  const arrayOfDivs = document.querySelectorAll(".rowChild__div");
  // loop through the array, if the randomNum equals the index of the div, make that div the one with the id of "lose"
  for (let i = 0; i < arrayOfDivs.length; i++) {
    if (i === randomNumber) {
      arrayOfDivs[i].setAttribute("id", "lose");
    }
  }
}

// Invoking the assignLoseId function
assignLoseId();

// create a variable for the div with an id of "lose"
const lose = document.getElementById("lose");
// create a variable for the skull image
const skullImg = document.createElement("img");
// change size of skull image
skullImg.width = "75";
// append img to div with id of "lose"
lose.appendChild(skullImg);

// FUNCTIONS AND VARIABLES FOR WINNING THE GAME
// function to pick div and assign "win" id to it
function assignWinId() {
  // generate a random number between 0 and 15 and store it in a variable
  const randomNumber = Math.floor(Math.random() * 15);
  // store the array of divs with the class "rowChild__div" in a variable
  const arrayOfDivs = document.querySelectorAll(".rowChild__div");
  // loop through the array, if the randomNum equals the index of the div, make that div the one with the id of "lose"
  for (let i = 0; i < arrayOfDivs.length; i++) {
    if (i === randomNumber) {
      arrayOfDivs[i].setAttribute("id", "win");
    }
  }
}

// Invoking the assignWinId() function
assignWinId();

// create a variable for the div with an id of "lose"
const win = document.getElementById("win");
// create a variable for the skull image
const smileImg = document.createElement("img");
// change size of skull image
smileImg.width = "75";
// append img to div with id of "lose"
win.appendChild(smileImg);

//functions for the parent div clicks
function parentDivClicks(event) {
  // If square with class of "rowChild__div" is clicked on, turn green.
  if (event.target.className === "rowChild__div") {
    event.target.classList.add("green");
  }
  if (event.target.id === "lose") {
    // If square with ID of "lose" is clicked, turn red.
    lose.style.backgroundColor = "#ee1d24";
    skullImg.setAttribute("src", "images/skull.png");
    // Select all green squares loop through them and turn them yellow
    const greenSquares = document.querySelectorAll(".green");
    for (let greenSquare of greenSquares) {
      greenSquare.setAttribute("id", "yellow");
    }
    // remove event listener on parent div
    parentDiv.removeEventListener("click", parentDivClicks);
  }
  // if square with ID of "win" is clicked, show smiley face and pop-up modal
  if (event.target.id === "win") {
    win.style.backgroundColor = "#000000";
    smileImg.setAttribute("src", "images/smileyface.png");
    // Show pop-up modal
    modal.classList.add("is-visible");
    // remove event listener on parent div
    parentDiv.removeEventListener("click", parentDivClicks);
  }
}

// Add the event listener for the parentDiv
parentDiv.addEventListener("click", parentDivClicks);

// FUNCTIONS FOR CLOSING MODALS
const closeEls = document.querySelectorAll("[data-close]");
// Close Modal when "X" is clicked
for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(
      "is-visible"
    );
  });
}

// Close Modal if ESC button is clicked
document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
