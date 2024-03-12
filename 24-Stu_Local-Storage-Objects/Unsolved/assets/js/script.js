var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  let user = { // this is the user object
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value 
  };
  console.log(user); 
  // TODO: Set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user)); // JSON.stringify() converts a JavaScript object into a string
  let lastUser = JSON.parse(localStorage.getItem("user")); // JSON.parse() converts a string into a JavaScript object
  console.log(lastUser); 
}
);
