// const createLuckyMeButton = () => {
//   const luckyMeButton = document.createElement('div')
//   luckyMeButton.className = 'lucky-btn'

//   const luckyMeWrapper = document.createElement('div')
//   luckyMeWrapper.className = 'lucky-wrapper'

//   const luckyMeText = document.createElement('div')
//   luckyMeText.textContent = 'Lucky Me'

//   luckyMeWrapper.appendChild(luckyMeText)
//   luckyMeButton.appendChild(luckyMeWrapper)

//   return luckyMeButton
// }

const createLuckyMeButton = () => {
  const luckyMeButton = document.createElement('div')
  luckyMeButton.className = 'lucky-btn'

  const luckyMeWrapper = document.createElement('div')
  luckyMeWrapper.className = 'lucky-wrapper'

  const luckyIcon = document.createElement('i');
  luckyIcon.className = 'fas fa-power-off'
  
  const luckyMe = document.createElement('div')
  luckyMe.className = 'lucky'

  luckyMe.appendChild(luckyIcon)

  const luckyMeIndicator = document.createElement('div')
  luckyMeIndicator.className = 'lucky-indicator'

  luckyMeWrapper.appendChild(luckyMe)
  luckyMeButton.appendChild(luckyMeWrapper)
  luckyMeButton.appendChild(luckyMeIndicator)

  return luckyMeButton
}

const createHeroBackground = (index) => {
  const shape = document.createElement('div')
  shape.className = `shape-${index}`

  return shape
}

const createHeroWrapper = () => {
  const heroContainer = document.createElement('div')
  heroContainer.className = 'hero-container'

  const heroWrapper = document.createElement('div')
  heroWrapper.className = 'hero-wrapper'
  
  // Text
  const heroText = document.createElement('h1');
  heroText.textContent = 'HI';
  const heroDot = document.createElement('span')
  heroText.appendChild(heroDot)
  heroWrapper.appendChild(heroText)

  // Scroll Down
  const scrollDownContainer = document.createElement('div')
  scrollDownContainer.className = 'scroll-down'
  const scrollDownText = document.createElement('h3')
  scrollDownText.textContent = 'Scroll Down'
  const scrollDownIcon = document.createElement('i')
  scrollDownIcon.className = 'fas fa-chevron-down'

  scrollDownContainer.appendChild(scrollDownText)
  scrollDownContainer.appendChild(scrollDownIcon)
  
  heroContainer.appendChild(heroWrapper)
  heroContainer.appendChild(scrollDownContainer)
  heroContainer.appendChild(createLuckyMeButton())

  for(let i = 0; i < 4; i+=1) {
    heroContainer.appendChild(createHeroBackground(i+1))
  }

  return heroContainer;
}

const createHeroSection = () => {
  const hero = document.createElement('section');
  hero.id = 'hero';

  hero.appendChild(createHeroWrapper());

  return hero;
};

export default createHeroSection;
