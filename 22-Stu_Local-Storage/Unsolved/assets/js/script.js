
var emailInput = document.querySelector("#email"); 
var passwordInput = document.querySelector("#password"); 
var signUpButton = document.querySelector("#sign-up"); 
var msgDiv = document.querySelector("#msg"); 
var userEmailSpan = document.querySelector("#user-email"); 
var userPasswordSpan = document.querySelector("#user-password"); 

renderLastRegistered(); 

function displayMessage(type, message) { 
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
} 
 
function renderLastRegistered() {
  var lastRegisteredEmail = localStorage.getItem("email");
  var lastRegisteredPassword = localStorage.getItem("password");

  if (lastRegisteredEmail && lastRegisteredPassword) {
    userEmailSpan.textContent = lastRegisteredEmail;
    userPasswordSpan.textContent = lastRegisteredPassword;
  }
}

signUpButton.addEventListener("click", function(event) { // add an event listener to the sign up button
  event.preventDefault(); // prevent the default action
 
  var email = document.querySelector("#email").value; // get the email and password from the input
  var password = document.querySelector("#password").value; // get the email and password from the input

  if (email === "") {
    displayMessage("error", "Email cannot be blank"); // display the message
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank"); // display the message
  } else {
    displayMessage("success", "Registered successfully"); // display the message

    localStorage.setItem("email", email); // set the email and password to local storage
    localStorage.setItem("password", password); // set the email and password to local storage

    renderLastRegistered(); // render the last registered email and password
  }
});
  



