import dark from '../assets/modes/dark.svg';
import light from '../assets/modes/light.svg';

const createNavButtons = (container, section, text) => {
  const button = document.createElement('div');
  button.className = `${section}-link`;
  const buttonText = document.createElement('div');
  buttonText.textContent = text;

  button.appendChild(buttonText);

  container.appendChild(button);
};

const createNavLinks = () => {
  const navLinks = document.createElement('div');
  navLinks.className = 'nav-links';
  createNavButtons(navLinks, 'home', 'HOME');
  createNavButtons(navLinks, 'about', 'ABOUT');
  createNavButtons(navLinks, 'skills', 'SKILLS');
  createNavButtons(navLinks, 'projects', 'PROJECTS');

  return navLinks;
};

const createMenuActions = () => {
  const menuActions = document.createElement('div');
  menuActions.className = 'menu-actions';

  const resumeButtons = document.createElement('a');
  resumeButtons.href =
    'https://drive.google.com/file/d/1iSARtnbd53uTodpo46eMjNZOEwEe3ojA/view?usp=drive_open';
  resumeButtons.rel = 'noopener noreferrer';
  resumeButtons.target = '_blank';
  resumeButtons.className = 'resume-button';
  const resumeIcon = document.createElement('i');
  resumeIcon.className = 'fas fa-paperclip';
  const resumeButtonText = document.createElement('div');
  resumeButtonText.textContent = 'Get Resume';
  resumeButtons.appendChild(resumeIcon);
  resumeButtons.appendChild(resumeButtonText);

  const linkedInButton = document.createElement('a');
  linkedInButton.href = 'https://linkedin.com/in/m-aldi-gunawan';
  linkedInButton.target = '_blank';
  linkedInButton.rel = 'noopener noreferrer';
  linkedInButton.className = 'linkedin-button';
  const linkedInIcon = document.createElement('i');
  linkedInIcon.className = 'fab fa-linkedin';
  linkedInButton.appendChild(linkedInIcon);

  const githubButton = document.createElement('a');
  githubButton.href = 'https://github.com/Delfiald';
  githubButton.target = '_blank';
  githubButton.rel = 'noopener noreferrer';
  githubButton.className = 'github-button';
  const githubIcon = document.createElement('i');
  githubIcon.className = 'fab fa-github';
  githubButton.appendChild(githubIcon);

  const mailButton = document.createElement('a');
  mailButton.href = 'mailto:aldigunawan1808@gmail.com';
  mailButton.className = 'mail-button';
  const mailIcon = document.createElement('i');
  mailIcon.className = 'fas fa-envelope';
  mailButton.appendChild(mailIcon);

  menuActions.appendChild(resumeButtons);
  menuActions.appendChild(linkedInButton);
  menuActions.appendChild(githubButton);
  menuActions.appendChild(mailButton);

  return menuActions;
};

const createModeButtons = () => {
  const modeButton = document.createElement('div');
  modeButton.className = 'mode-button';

  const modeTogglerWrapper = document.createElement('div');
  modeTogglerWrapper.className = 'mode-toggler-wrapper';

  const modeToggler = document.createElement('div');
  modeToggler.className = 'mode-toggler';
  const modeTogglerIconDark = document.createElement('img');
  modeTogglerIconDark.className = 'icon-dark';
  modeTogglerIconDark.src = dark;
  modeTogglerIconDark.alt = 'darkMode';
  const modeTogglerIconLight = document.createElement('img');
  modeTogglerIconLight.className = 'icon-light';
  modeTogglerIconLight.src = light;
  modeTogglerIconLight.alt = 'lightMode';

  modeToggler.appendChild(modeTogglerIconDark);
  modeToggler.appendChild(modeTogglerIconLight);

  const modeTextDark = document.createElement('div');
  modeTextDark.textContent = 'Dark';
  modeTextDark.className = 'mode-text-dark';
  const modeTextLight = document.createElement('div');
  modeTextLight.textContent = 'Light';
  modeTextLight.className = 'mode-text-light';

  modeTogglerWrapper.appendChild(modeToggler);
  modeTogglerWrapper.appendChild(modeTextDark);
  modeTogglerWrapper.appendChild(modeTextLight);

  modeButton.appendChild(modeTogglerWrapper);

  return modeButton;
};

const createMenuContent = () => {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';

  menuContainer.appendChild(createNavLinks());
  menuContainer.appendChild(createMenuActions());
  menuContainer.appendChild(createModeButtons());

  return menuContainer;
};

const createMenu = () => {
  const menu = document.createElement('aside');
  menu.id = 'menu';

  menu.appendChild(createMenuContent());

  return menu;
};

export default createMenu;
