---
---
const previews = [];
const uspButtons = Array.from(document.getElementsByClassName('usp__button'));

class DynamicElement {
  constructor(baseClassName, updateContentFn) {
    this.hiddenClassName = baseClassName + '--hidden';
    this.updateContentFn = updateContentFn;
    this.elements = Array.from(document.getElementsByClassName(baseClassName));
  }

  toggle(index) {
    const hiddenEl = this.elements.find(el => el.className.includes(this.hiddenClassName));
    if (hiddenEl) {
      this.updateContentFn(hiddenEl, index);
      this.elements.forEach(el => el.classList.toggle(this.hiddenClassName));
    }
  }
}

const preview = new DynamicElement('usp__preview', (preview, index) => preview.src = '{{ site.baseurl }}/assets/svg/' + previews[index]);

const setButtonActive = (button, index) => {
  const activeButton = document.querySelector('.usp__button--active');
  if (activeButton) activeButton.classList.remove('usp__button--active');
  button.classList.add('usp__button--active');

  preview.toggle(index);
  toggleAccordion(button.parentElement.querySelector('.usp__content').id);
}

if (uspButtons) uspButtons.forEach((button, index) => button.addEventListener('click', () => setButtonActive(button, index)));

let originalHeights;
let accordions;

window.onload = () => {
  accordions = Array.from(document.getElementsByClassName('usp__content'));
  if (accordions) {
    originalHeights = accordions.map(accordion => ({ id: accordion.id, accordionHeight: accordion.offsetHeight }));
    accordions.forEach((accordion, index) => {
      if (index) accordion.style.height = '0';
      else accordion.style.height = `${accordion.offsetHeight}px`
    });
  }
}

const toggleAccordion = (id) => {
  const accordion = document.getElementById(id);
  const accordionData = originalHeights.find(el => el.id === id);

  accordions.forEach(el => {
    if (el.id !== id && el.offsetHeight) {
      el.style.height = '0';
    }
  })

  if (accordion && accordionData) {
    if (!accordion.offsetHeight) accordion.style.height = accordionData.accordionHeight + 'px';
    else accordion.style.height = '0';
  }
}
