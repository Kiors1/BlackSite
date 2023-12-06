const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');

let counter = 0;
const slideWidth = document.querySelector('.card').offsetWidth;

nextButton.addEventListener('click', () => {
  if (counter < slides.children.length - 1) {
    counter++;
    slides.style.transform = `translateX(-${slideWidth * counter}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    slides.style.transform = `translateX(-${slideWidth * counter}px)`;
  }
});
