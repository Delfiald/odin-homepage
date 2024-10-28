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

const createOverviewSection = () => {
  const overview = document.createElement('div')
  overview.className = 'about-overview'

  const nameSection = document.createElement('div');
  nameSection.className = 'name-section';
  nameSection.textContent = 'Hi, my name is ';
  const nameSpan = document.createElement('span');
  nameSpan.textContent = 'Aldi ';
  const decorationSpan = document.createElement('span');
  
  const descriptionSection = document.createElement('div')
  descriptionSection.className = 'description-section'
  descriptionSection.textContent = `I'm a `
  const overviewJob = document.createElement('span')
  overviewJob.textContent = 'Fullstack Developer '
  descriptionSection.appendChild(overviewJob)
  descriptionSection.appendChild(document.createTextNode('from Indonesia'));

  nameSection.appendChild(nameSpan);
  nameSection.appendChild(decorationSpan);

  overview.appendChild(nameSection)
  overview.appendChild(descriptionSection)

  return overview
}

const createDetailsSection = () => {
  const details = document.createElement('div')
  details.className = 'about-details'

  const detailsContent = document.createElement('div')
  detailsContent.textContent = 'Details Content'

  const detailsContent2 = document.createElement('div')
  detailsContent2.textContent = 'Details Content'

  const detailsContent3 = document.createElement('div')
  detailsContent3.textContent = 'Details Content'

  details.appendChild(detailsContent)
  details.appendChild(detailsContent2)
  details.appendChild(detailsContent3)

  return details
}

const createAboutContainer = () => {
  const container = document.createElement('div');
  container.className = 'about-container';

  const moreButton = document.createElement('div')
  moreButton.className = 'more-btn'

  const moreButtonText = document.createElement('div')
  moreButtonText.textContent = 'More'

  const moreButtonIcon = document.createElement('i')
  moreButtonIcon.className = 'fas fa-chevron-right'

  moreButton.appendChild(moreButtonText)
  moreButton.appendChild(moreButtonIcon)

  container.appendChild(createAboutTitle());
  container.appendChild(createOverviewSection());
  container.appendChild(createDetailsSection());
  container.appendChild(moreButton);

  return container;
}

const createAboutSection = () => {
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
 
  aboutSection.appendChild(createAboutContainer());

  return aboutSection;
};

export default createAboutSection;
