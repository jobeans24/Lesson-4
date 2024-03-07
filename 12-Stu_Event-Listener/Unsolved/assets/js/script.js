let count = 0;
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count'); 

function setCounterText() {
  countEl.textContent = count;
} // this function sets the text of the count element to the current count


incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
}); // this function increases the number count when the increment button is clicked

decrementEl.addEventListener('click', function() {
  count--;
  if (count < 0) {
    count = 0;
  } // this function ensures that the count does not go below 0
  setCounterText();
}); // this function decreases the number count when the decrement button is clicked

setCounterText(); // this function sets the text of the count element to the current count