import hero from '../components/hero'
import menu from '../components/menu'
import about from '../components/about'
import skills from '../components/skills'
import portfolio from '../components/portfolios'
import contact from '../components/contact'

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
}