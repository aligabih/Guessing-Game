const guessbutton = document.querySelector ("#guessbtn");
const reset = document.querySelector ("#reset");
const hint = document.querySelector ("#hint");
const textField = document.querySelector("#textbox");
const entriesList = document.querySelector("ul");

const entriesArray=[];
let guesses = 5
let correctNumber = Math.floor(Math.random() * 100) + 1
const hinttext = document.getElementById("higherorlower");


guessbutton.addEventListener('click', function(){
    const textFieldValue = textField.value;
for (i = 0; i<guesses; i++){
    if (correctNumber== textFieldValue) {
        hinttext.textContent=("Congratulations! " + "You guessed the number.")
    } else if (correctNumber> textFieldValue) {
        hinttext.textContent= ("The number is greater than " + textFieldValue)
    } else if (correctNumber < textFieldValue) {
        hinttext.textContent= ("The number is less than " + textFieldValue)
    }
    if (i == guesses) {
        hinttext.textContent =("You have ran out of guesses")
    }}
const listItem= document.createElement("li");
    listItem.textContent = textField.value;
    entriesList.appendChild(listItem);

    entriesArray.push(textFieldValue);
    console.log(entriesArray);



})

reset.addEventListener('click', function(){
    
    guesses = 5
    correctNumber = Math.floor(Math.random() * 100) + 1

})

