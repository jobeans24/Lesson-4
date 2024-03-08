const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  // TODO: Complete function
  const element = event.target; // gets the element that triggered the event
  const elementName = element.getAttribute('data-element'); // gets the value of the data-element attribute of the element that triggered the event
  const elementIndex = element.getAttribute('data-index'); // gets the value of the data-index attribute of the element that triggered the event
  const elementStatus = document.querySelector('#status'); // gets the element with the id "status"
  elementStatus.textContent = `${elementName} - ${elementIndex}`; // sets the text content of the element with the id "status" to the value of the data-element attribute and the value of the data-index attribute of the element that triggered the event
  // This line of code is preventing the event from bubbling up the DOM tree
  event.stopPropagation();
}
);

document.addEventListener('click', function () {
  document.querySelector('#status').textContent = 'container';
});

