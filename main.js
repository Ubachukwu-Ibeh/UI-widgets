const getElem = id => document.getElementById(id);

const moreOptions = getElem('more-options');
const options = getElem('options');

let optionsIsOpen = false;

const toggleOptions = (e, fromBody) => {
  if (fromBody && !optionsIsOpen) return;
  e.stopPropagation();

  if (!optionsIsOpen) {
    options.style.display = 'flex';
    options.style.animation = 'fade-in 0.2s ease'
  } else {
    options.style.display = 'none';
  }
  optionsIsOpen = !optionsIsOpen;
}

moreOptions.onclick = e => toggleOptions(e);
document.body.onclick = e => toggleOptions(e, true);

//CARD 2
const content = getElem('card2-content');
const main = getElem('card2-section2');
const engagement = getElem('card2-engagement');

let contentIsOpen = false;

const handleContentReveal = () => {
  if (!contentIsOpen) {
    main.style.animation = 'reveal-content 0.4s ease';
  } else {
    
  }
}
content.onclick = handleContentReveal;