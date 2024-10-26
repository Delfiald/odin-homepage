const createAboutSection = () => {
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';

  const aboutHeader = document.createElement('h1');
  aboutHeader.textContent = 'About';

  aboutSection.appendChild(aboutHeader);

  return aboutSection;
};

export default createAboutSection;
