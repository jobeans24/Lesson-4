function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").textContent = "KEYDOWN Event"; // sets the text content of the element with the id "status" to "KEYDOWN Event"
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction); // calls the function keyupAction when the keyup event is triggered
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction); // calls the function keydownAction when the keydown event is triggered



