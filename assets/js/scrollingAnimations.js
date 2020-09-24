const animatedElements = document.getElementsByClassName('animate');
const scrollButtonEl = document.querySelector('.scroll-button');
const about = document.getElementById('about');
const SHOW_ON_DISTANCE_FROM_BOTTOM = 128;

function detectBounding() {
  Array.from(animatedElements).forEach(el => {
    const bottomBounding = el.getBoundingClientRect().bottom;

    // Add class when the top of the element is specified distance above the bottom window border
    if (bottomBounding - el.clientHeight + SHOW_ON_DISTANCE_FROM_BOTTOM <= (window.innerHeight || document.documentElement.clientHeight)) {
      el.classList.add('animate--active');
    }

  });
}

function scrollTopAboveFooter() {
  const bottomBounding = about.getBoundingClientRect().bottom;

  //Change the scroll bottom element into scroll top element if on footer
  if (bottomBounding - about.clientHeight + scrollButtonEl.clientHeight <= (window.innerHeight || document.documentElement.clientHeight)) {
    scrollButtonEl.classList.add('scroll-button--hidden');
  } else if (scrollButtonEl.classList.contains('scroll-button--hidden')) {
    scrollButtonEl.classList.remove('scroll-button--hidden');
  }
}

document.addEventListener('scroll', () => {
  // Debounce to limit the function execution on scroll event
  let waiting = false;
  if (!waiting) {
    detectBounding();
    scrollTopAboveFooter();
    waiting = true;
    setTimeout(() => waiting = false, 500)
  }
});

detectBounding();
scrollTopAboveFooter();

const header = document.querySelector('header');
const scrollToForm = () => header.scrollIntoView({behavior: 'smooth'});
