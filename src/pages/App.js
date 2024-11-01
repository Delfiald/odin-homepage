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

const createMenuButton = () => {
  const menuButton = document.createElement('div');
  menuButton.id = 'menu-btn';
  const menuButtonText = document.createElement('div');
  menuButtonText.textContent = 'Menu';

  const menuButtonIcon = document.createElement('div');
  const icon1 = document.createElement('div');
  const icon2 = document.createElement('div');

  menuButtonIcon.appendChild(icon1);
  menuButtonIcon.appendChild(icon2);

  menuButton.appendChild(menuButtonText);
  menuButton.appendChild(menuButtonIcon);

  return menuButton;
};

export default () => {
  const body = document.querySelector('body');
  body.appendChild(createMenuButton());

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
