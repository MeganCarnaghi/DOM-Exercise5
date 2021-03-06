// create a variable for the parent div
const parentDiv = document.querySelector(".parent__div");

// function to pick div and assign "it" id to it
function assignItId() {
  // generate a random number between 0 and 15 and store it in a variable
  const randomNumber = Math.floor(Math.random() * 15);
  // store the array of divs with the class "rowChild__div" in a variable
  const arrayOfDivs = document.querySelectorAll(".rowChild__div");
  // loop through the array, if the randomNum equals the index of the div, make that div the one with the id of "it"
  for (let i = 0; i < arrayOfDivs.length; i++) {
    if (i === randomNumber) {
      arrayOfDivs[i].setAttribute("id", "it");
    }
  }
}

// Invoking the assignItId function
assignItId();

// create a variable for the div with an id of "it"
const it = document.getElementById("it");
// create a variable for the skull image
const skullImg = document.createElement("img");
// change size of skull image
skullImg.width = "75";
// append img to div with id of "it"
it.appendChild(skullImg);

// Add the event listener for the parentDiv
parentDiv.addEventListener("click", (event) => {
  // If square with class of "rowChild__div" is clicked on, turn green.
  if (event.target.className === "rowChild__div") {
    event.target.classList.add("green");
  }
  if (event.target.id === "it") {
    // If square with ID of "it" is clicked, turn red.
    it.style.backgroundColor = "#ee1d24";
    skullImg.setAttribute("src", "skull.png");
    // Select all green squares loop through them and turn them yellow
    const greenSquares = document.querySelectorAll(".green");
    for (let greenSquare of greenSquares) {
      greenSquare.setAttribute("id", "yellow");
    }
  }
});
