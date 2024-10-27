const createAboutTitle = () => {
  const aboutTitle = document.createElement('div')
  aboutTitle.className = 'about-title'

  const a = document.createElement('div')
  a.textContent = 'A'
  const b = document.createElement('div')
  b.textContent = 'B'
  const o = document.createElement('div')
  o.textContent = 'O'
  const u = document.createElement('div')
  u.textContent = 'U'
  const t = document.createElement('div')
  t.textContent = 'T'

  aboutTitle.appendChild(a)
  aboutTitle.appendChild(b)
  aboutTitle.appendChild(o)
  aboutTitle.appendChild(u)
  aboutTitle.appendChild(t)

  return aboutTitle
}

const createAboutContainer = () => {
  const aboutContainer = document.createElement('div')
  aboutContainer.className = 'about-container'

  return aboutContainer
}

const createAboutSection = () => {
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
 
  aboutSection.appendChild(createAboutTitle());
  aboutSection.appendChild(createAboutContainer());

  return aboutSection;
};

export default createAboutSection;
