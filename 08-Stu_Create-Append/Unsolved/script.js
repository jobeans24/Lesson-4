let body = document.body;
let h1El = document.createElement("h1");
let infoEl = document.createElement("div");
let imgEl = document.createElement("img");
let kittenEl = document.createElement("div");
let nameEl = document.createElement("div");
let favoriteEl = document.createElement("div");
// Create ordered list element
let listEl = document.createElement("ol");
// Create ordered list items
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
// Append ordered list items
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Set ordered list items text
li1.textContent = "Pizza";
li2.textContent = "Sushi";
li3.textContent = "Ice Cream";
li4.textContent = "Tacos";

// Set ordered list style
listEl.setAttribute("style", "background-color: #333333; padding: 20px;");

// Set ordered list items style
li1.setAttribute("style", "color: white; background-color: lightgreen; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", "color: white; background-color: lightcoral; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", "color: white; background-color: lightblue; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", "color: white; background-color: lightgrey; padding: 5px; margin-left: 35px;");



