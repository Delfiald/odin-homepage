const createSeparateLetter = (word, container) => {
  const letters = word.split('');
  let isSpacing = false;
  let currentLetter = 0;
  for (let i = 0; i < 11; i += 1) {
    const letterDiv = document.createElement('div');

    if ((letters[i] === ' ' && i < 6) || isSpacing) {
      letterDiv.textContent = letters[i];
      isSpacing = true;

      if (i < 6) {
        letterDiv.textContent = ' ';
      } else {
        letterDiv.textContent = letters[currentLetter];
        currentLetter += 1;
        isSpacing = false;
      }

      if (letters[i] === ' ') {
        currentLetter = i + 1;
      }
    } else {
      letterDiv.textContent = letters[i];
      if (currentLetter < letters.length) {
        letterDiv.textContent = letters[currentLetter];
        currentLetter += 1;
      } else {
        letterDiv.textContent = ' ';
      }
    }

    letterDiv.className = 'letter';
    container.appendChild(letterDiv);
  }
};

const createHeroWrapper = () => {
  const heroContainer = document.createElement('div');
  heroContainer.className = 'hero-container';

  const heroWrapper = document.createElement('div');
  heroWrapper.className = 'hero-wrapper';

  // Text
  const heroText = document.createElement('h1');

  const textList = ['HELLO WORLD', 'LOREM IPSUM', 'DOGE HECK', 'H I'];

  for (let i = 0; i < textList.length; i += 1) {
    const text = document.createElement('div');
    text.className = 'hero-text';
    text.dataset.textId = i + 1;
    createSeparateLetter(textList[i], text);

    if (i === 0) {
      const heroDot = document.createElement('span');
      text.appendChild(heroDot);
    }

    heroText.appendChild(text);
  }

  heroWrapper.appendChild(heroText);

  // Scroll Down
  const scrollDownContainer = document.createElement('div');
  scrollDownContainer.className = 'scroll-down';
  const scrollDownText = document.createElement('h3');
  scrollDownText.textContent = 'Scroll Down';
  const scrollDownIcon = document.createElement('i');
  scrollDownIcon.className = 'fas fa-chevron-down';

  scrollDownContainer.appendChild(scrollDownText);
  scrollDownContainer.appendChild(scrollDownIcon);

  heroContainer.appendChild(heroWrapper);
  heroContainer.appendChild(scrollDownContainer);

  return heroContainer;
};

const createHeroSection = () => {
  const hero = document.createElement('section');
  hero.id = 'hero';

  hero.appendChild(createHeroWrapper());

  return hero;
};

export default createHeroSection;
