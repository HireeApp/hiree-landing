const animatedElements = document.getElementsByClassName('animate');
const SHOW_ON_DISTANCE_FROM_BOTTOM = 64;

function detectBounding() {
  Array.from(animatedElements).forEach(el => {
    const bottomBounding = el.getBoundingClientRect().bottom;

    // Add class when the top of the element is specified distance above the bottom window border
    if (bottomBounding - el.clientHeight + SHOW_ON_DISTANCE_FROM_BOTTOM <= (window.innerHeight || document.documentElement.clientHeight)) {
      el.classList.add('animate--active');
    }

  });
}

document.addEventListener('scroll', () => {
  // Debounce to limit the function execution on scroll event
  let waiting = false;
  if (!waiting) {
    detectBounding();
    waiting = true;
    setTimeout(() => waiting = false, 500)
  }
});

detectBounding();
