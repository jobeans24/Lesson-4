const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;
  let number = element.getAttribute('data-number'); 

  let state = element.getAttribute('data-state'); // this is the default state
  if (state === 'hidden') {
    element.setAttribute('data-state', 'visible'); 
    element.textContent = number; // this is the visible state
  } else {
    element.setAttribute('data-state', 'hidden'); // this is the default state
  } 
  // TODO: Complete function
  
});






