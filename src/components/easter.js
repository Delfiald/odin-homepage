import easter from '../assets/easter/easter.png';

export const createEasterEggWrapper = () => {
  const easterEggWrapper = document.createElement('div');
  easterEggWrapper.className = 'easter-egg-wrapper';

  const easterEgg = document.createElement('div');
  easterEgg.className = 'easter-egg';

  const easterEggFirstText = document.createElement('div');
  easterEggFirstText.className = 'easter-first-text';
  easterEggFirstText.textContent =
    'Congratulations! You found the secret button. The ultimate secret will now be revealed...';

  const easterEggSecondText = document.createElement('div');
  easterEggSecondText.textContent = 'How to make friends in real life! 🤯';
  easterEggSecondText.className = 'easter-second-text';

  const easterImageWrapper = document.createElement('div');
  easterImageWrapper.className = 'easter-image-wrapper';
  const easterImage = document.createElement('img');
  easterImage.src = easter;
  easterImage.alt = 'Why are you still here?';
  easterImageWrapper.appendChild(easterImage);

  const easterEggLastText = document.createElement('div');
  easterEggLastText.className = 'easter-last-text';
  const lastTextOne = document.createElement('div');
  lastTextOne.textContent = `Seriously? You're that lonely? Go touch some grass.`;
  const lastTextTwo = document.createElement('div');
  lastTextTwo.textContent = 'Now close this section and go outside';
  easterEggLastText.appendChild(lastTextOne);
  easterEggLastText.appendChild(lastTextTwo);

  const closeButtonWrapper = document.createElement('div');
  closeButtonWrapper.className = 'easter-close-wrapper';
  const closeButtonArrow = document.createElement('i');
  closeButtonArrow.className = 'fas fa-arrow-down';
  const closeButton = document.createElement('div');
  closeButton.classList = 'easter-close-btn';
  closeButton.textContent = 'Close';
  closeButtonWrapper.appendChild(closeButtonArrow);
  closeButtonWrapper.appendChild(closeButton);

  easterEgg.appendChild(easterEggFirstText);
  easterEgg.appendChild(easterEggSecondText);
  easterEgg.appendChild(easterImageWrapper);
  easterEgg.appendChild(easterEggLastText);
  easterEgg.appendChild(closeButtonWrapper);

  easterEggWrapper.appendChild(easterEgg);

  return easterEggWrapper;
};

const createEasterEgg = () => {
  const easterEggBackground = document.createElement('div');
  easterEggBackground.className = 'easter-egg-background';

  return easterEggBackground;
};

export default createEasterEgg;
