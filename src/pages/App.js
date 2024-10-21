import hero from '../components/hero'
import menu from '../components/menu'
import about from '../components/about'
import skills from '../components/skills'
import portfolio from '../components/portfolios'
import contact from '../components/contact'
import events from './event'

const createSectionIndicator = () => {
  const sectionsName = ['Home', 'About', 'Skill', 'Projects']

  const indicatorWrapper = document.createElement('div')
  indicatorWrapper.className = 'indicator-wrapper'

  for(let i = 0; i < 4; i+=1) {
    const indicator = document.createElement('div')
    indicator.className = `indicator`
    indicator.dataset.section = i+1;
    indicator.textContent = sectionsName[i]
    indicatorWrapper.appendChild(indicator)
  }

  return indicatorWrapper;
}

export default () => {
  const body = document.querySelector('body')
  body.appendChild(menu())

  const main = document.createElement('main')

  main.appendChild(hero())
  main.appendChild(about())
  main.appendChild(skills())
  main.appendChild(portfolio())

  body.appendChild(main)

  body.appendChild(contact())

  body.appendChild(createSectionIndicator())

  events()
}