let currentIndex = 0;
const slides = document.querySelectorAll(".intro-slider-text");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Initialize the first slide and start the interval
showSlide(currentIndex);
setInterval(nextSlide, 4000);
