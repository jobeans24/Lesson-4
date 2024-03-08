// TODO: Which element is the following line of code selecting?
// this const is selecting the element with the class of "carouselbox"
const carousel = document.querySelector('.carouselbox');
// TODO: Which element is the following line of code selecting?
// the following const is selecting the element with the class of "next" and "prev"
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
// This event listener is listening for a click event on the carousel element, and when that event is triggered, it will navigate to the next image in the images array
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// This event listener is listening for a click event on the next element, and when that event is triggered, it will navigate to the next image in the images array
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
  // this line of code is preventing the event from bubbling up the DOM tree
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// This event listener is listening for a click event on the prev element, and when that event is triggered, it will navigate to the previous image in the images array
prev.addEventListener('click', function (event) {

  // TODO: What would happen if we didn't add the following line of code?
  // if we didn't add this line of code, the event would bubble up the DOM tree
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
