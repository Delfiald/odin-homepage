import hero from '../components/hero'
import menu from '../components/menu'
import about from '../components/about'
import skills from '../components/skills'
import portfolio from '../components/portfolios'

export default () => {
  const body = document.querySelector('body')
  body.appendChild(menu())
  body.appendChild(about())

  const main = document.createElement('main')

  main.appendChild(hero())
  main.appendChild(skills())
  main.appendChild(portfolio())

  body.appendChild(main)
}