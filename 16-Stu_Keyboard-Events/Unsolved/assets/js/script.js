
let keyPressedEl = document.querySelector("#key"); // sets the key variable to the element with the id "key"
let keyCodeEl = document.querySelector("#code"); // sets the code variable to the element with the id "code"

function keydownAction(event) {
  // TODO: Complete keydown function
  let key = event.key; // sets the key variable to the key property of the event object
  keyPressedEl.textContent = key; // sets the text content of the element with the id "key" to the value of the key variable
  let code = event.code; // sets the code variable to the code property of the event object
  keyCodeEl.textContent = code; // sets the text content of the element with the id "code" to the value of the code variable

  document.querySelector("#status").textContent = "KEYDOWN Event"; // sets the text content of the element with the id "status" to "KEYDOWN Event"
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event"; // sets the text content of the element with the id "status" to "KEYUP Event"
}

document.addEventListener("keyup", keyupAction); // calls the function keyupAction when the keyup event is triggered
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction); // calls the function keydownAction when the keydown event is triggered



