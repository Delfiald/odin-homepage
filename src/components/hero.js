const createHeroWrapper = () => {
  const heroContainer = document.createElement('div');
  heroContainer.className = 'hero-container';

  const heroWrapper = document.createElement('div');
  heroWrapper.className = 'hero-wrapper';

  // Text
  const heroText = document.createElement('h1');
  heroText.textContent = 'HI';
  const heroDot = document.createElement('span');
  heroText.appendChild(heroDot);
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
