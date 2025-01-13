document.addEventListener('DOMContentLoaded', function() {
    const referenceSlider = document.querySelector('.reference-slider .slides');
    const slides = referenceSlider.querySelectorAll('.slide');
    const numSlides = slides.length;
    const cloneTimes = 10; // Number of times to clone the slides
  
    // Clone slides multiple times
    for (let j = 0; j < cloneTimes; j++) {
      for (let i = 0; i < numSlides; i++) {
        const clone = slides[i].cloneNode(true);
        referenceSlider.appendChild(clone);
      }
    }
  });