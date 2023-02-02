const guessbutton = document.querySelector("#guessbtn");
const reset = document.querySelector("#reset");
const hint = document.querySelector("#hint");
const textField = document.querySelector("#textbox");
const entriesList = document.querySelector("ul");
const hintNumber = document.getElementById("hintNumber");

let guesses = 5;
let correctNumber = Math.floor(Math.random() * 100) + 1;
const hinttext = document.getElementById("higherorlower");

guessbutton.addEventListener("click", function () {
  let textFieldValue = Number(textField.value);

  if (isNaN(textFieldValue) || textFieldValue < 1 || textFieldValue > 100) {
    hinttext.textContent = "Please enter a valid number.";
    return;
  }

  if (correctNumber == textFieldValue) {
    hinttext.textContent = "Congratulations! " + "You guessed the number.";
    return;
  }

  guesses--;

  if (guesses === 0) {
    hinttext.textContent = `You ran out of guesses. The correct number was ${correctNumber}`;
    guessbutton.disabled = true;
    const listItem = document.createElement("li");
    listItem.textContent = textField.value;
    entriesList.appendChild(listItem);
    textField.value = "";
    return;
  }

  if (correctNumber > textFieldValue) {
    hinttext.textContent = "The number is greater than " + textFieldValue;
  } else if (correctNumber < textFieldValue) {
    hinttext.textContent = "The number is less than " + textFieldValue;
  }

  const listItem = document.createElement("li");
  listItem.textContent = textField.value;
  entriesList.appendChild(listItem);

  textField.value = "";
});

reset.addEventListener("click", function () {
  correctNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 5;
  hinttext.textContent = "";
  entriesList.innerHTML = "";
  guessbutton.disabled = false;
  hint.disabled = false;
  hinttext.textContent = "Guess a number 1-100";
});

hint.addEventListener("click", function () {
  let hints = [];
  hints.push(correctNumber);
  while (hints.length < 3) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    if (!hints.includes(randomNum)) {
      hints.push(randomNum);
    }
  }

  hints = shuffle(hints);
  hinttext.textContent =
    "One of the following numbers is the correct answer: " +
    hints[0] +
    ", " +
    hints[1] +
    ", " +
    hints[2];
  hint.disabled = true;
});

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

document.getElementById("textbox").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("guessbtn").click();
  }
});
