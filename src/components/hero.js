import { getMonth, getYear } from 'date-fns';

import letterseparator from '../helpers/letterSeparator';

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

const createCurrentDate = () => {
  const currentMonth = getMonth(new Date()) + 1;
  const currentYear = getYear(new Date());

  return `${currentMonth}/${currentYear}`;
};

const createLineDecoration = (heroContainer, text) => {
  const line = document.createElement('div');
  line.className = 'decoration-line';
  const lineWrapper = document.createElement('div');
  lineWrapper.className = 'line-wrapper';
  const lineTextWrapper = document.createElement('div');
  lineTextWrapper.className = 'line-text-wrapper';
  const lineText = document.createElement('div');
  letterseparator(text, lineText);
  lineTextWrapper.appendChild(lineText);
  lineWrapper.appendChild(lineTextWrapper);
  line.appendChild(lineWrapper);

  heroContainer.appendChild(line);
};

const createDateDecorations = (heroContainer) => {
  const word = document.createElement('div');
  word.className = 'decoration-date';
  const wordWrapper = document.createElement('div');
  wordWrapper.className = 'date-wrapper';
  letterseparator(createCurrentDate(), wordWrapper);
  word.appendChild(wordWrapper);
  heroContainer.appendChild(word);
};

const createAngleDecoration = (heroContainer) => {
  const rightAngle = document.createElement('div');
  rightAngle.className = 'decoration-angle hide';
  const rightAngleWrapper = document.createElement('div');
  rightAngleWrapper.className = 'angle-wrapper';

  rightAngle.appendChild(rightAngleWrapper);

  heroContainer.appendChild(rightAngle);
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

  const heroMainText = document.createElement('div');
  heroMainText.className = 'hero-main-text';
  letterseparator('HI', heroMainText);
  const heroDot = document.createElement('span');
  heroMainText.appendChild(heroDot);
  heroText.appendChild(heroMainText);

  heroWrapper.appendChild(heroText);

  // Scroll Down
  const scrollDownContainer = document.createElement('div');
  scrollDownContainer.className = 'scroll-down';
  const scrollDownWrapper = document.createElement('div');
  scrollDownWrapper.className = 'scroll-down-wrapper';
  const scrollDownText = document.createElement('h3');
  scrollDownText.textContent = 'Scroll Down';
  const scrollDownIcon = document.createElement('i');
  scrollDownIcon.className = 'fas fa-arrow-down';

  scrollDownWrapper.appendChild(scrollDownText);
  scrollDownWrapper.appendChild(scrollDownIcon);
  scrollDownContainer.appendChild(scrollDownWrapper);

  heroContainer.appendChild(heroWrapper);
  heroContainer.appendChild(scrollDownContainer);

  // Decoration
  createLineDecoration(heroContainer, 'HELLO');
  createLineDecoration(heroContainer, 'WORLD');

  createDateDecorations(heroContainer);
  createAngleDecoration(heroContainer);
  createAngleDecoration(heroContainer);

  return heroContainer;
};

const createHeroSection = () => {
  const hero = document.createElement('section');
  hero.id = 'hero';

  hero.appendChild(createHeroWrapper());

  return hero;
};

export default createHeroSection;
