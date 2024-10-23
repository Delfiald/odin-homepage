import hero from '../components/hero';
import menu from '../components/menu';
import about from '../components/about';
import skills from '../components/skills';
import projects from '../components/projects';
import contact from '../components/contact';
import events from './event';

const createSectionIndicator = () => {
  const sectionsName = [
    {
      text: 'Home',
      target: 'hero',
    },
    {
      text: 'About',
      target: 'about',
    },
    {
      text: 'Skills',
      target: 'skills',
    },
    {
      text: 'Projects',
      target: 'projects',
    },
  ];

  const indicatorWrapper = document.createElement('div');
  indicatorWrapper.className = 'indicator-wrapper';

  for (let i = 0; i < 4; i += 1) {
    const indicator = document.createElement('a');
    indicator.href = `#${sectionsName[i].target}`;
    indicator.className = `indicator`;
    indicator.dataset.section = i + 1;
    indicator.textContent = sectionsName[i].text;
    indicatorWrapper.appendChild(indicator);
  }

  return indicatorWrapper;
};

export default () => {
  const body = document.querySelector('body');
  body.appendChild(menu());

  const main = document.createElement('main');

  main.appendChild(hero());
  main.appendChild(about());
  main.appendChild(skills());
  main.appendChild(projects());

  body.appendChild(main);

  body.appendChild(contact());

  body.appendChild(createSectionIndicator());

  document.querySelector('.indicator').classList.add('active');

  events();
};
