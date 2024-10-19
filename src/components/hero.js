const createHero = () => {
  const hero = document.createElement('section')
  hero.id = 'hero'
  
  const heroText = document.createElement('h1')
  heroText.textContent = 'Hero'

  hero.appendChild(heroText)

  return hero
}

export default createHero