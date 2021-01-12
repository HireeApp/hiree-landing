const switchButtons = Array.from(document.getElementsByClassName('group-button__button'));
const switchContents = Array.from(document.getElementsByClassName('group-button__content'));

let activeIndex = 0;

const changeActive = (index) => {
    if (index !== activeIndex) {
        switchButtons.forEach(button => button.classList.toggle('group-button__button--active'));
        switchContents.forEach(content => content.classList.toggle('group-button__content--active'));
    }

    activeIndex = index;
}

if (switchButtons) switchButtons.forEach((button, index) => button.addEventListener('click', () => changeActive(index)));
