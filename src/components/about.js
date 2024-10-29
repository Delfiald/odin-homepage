import linkedin from '../assets/link/linkedin.svg'

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
  overviewJob.textContent = 'Frontend Developer '
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
  detailsContent.textContent = `As an enthusiastic web developer and recent graduate, I have a strong passion for coding and problem-solving. Though I'm at the start of my professional journey, I've sharpened my skills through rigorous online courses like The Odin Project. These programs have given me a solid foundation in HTML, CSS, JavaScript, and various modern web development frameworks. My portfolio highlights practical projects that demonstrate my commitment to continuous learning and my ability to create innovative web solutions!`
  detailsContent.className = 'details-section'

  const detailsLink = document.createElement('div')
  detailsLink.className = 'link-section'
  const detailsLinkText = document.createElement('div')
  detailsLinkText.textContent = 'Explore my LinkedIn profile!'

  const detailsLinkButton = document.createElement('a')
  detailsLinkButton.href = 'https://linkedin.com/in/m-aldi-gunawan'
  detailsLinkButton.rel = 'noopener noreferrer'
  detailsLinkButton.target = '_blank'
  detailsLinkButton.className = 'linked-btn'
  const linkedInIcon = document.createElement('div')
  linkedInIcon.className = 'grayscale'

  const linkedInImage = document.createElement('img')
  linkedInImage.src = linkedin;
  linkedInIcon.appendChild(linkedInImage)
  
  const linkedInIconColored = document.createElement('div')
  linkedInIconColored.className = 'colored'

  const linkedInImageColored = document.createElement('img')
  linkedInImageColored.src = linkedin;
  linkedInIconColored.appendChild(linkedInImageColored)

  detailsLinkButton.appendChild(linkedInIcon)
  detailsLinkButton.appendChild(linkedInIconColored)

  detailsLink.appendChild(detailsLinkText)
  detailsLink.appendChild(detailsLinkButton)

  details.appendChild(detailsContent)
  details.appendChild(detailsLink)

  return details
}

const createAboutContainer = () => {
  const container = document.createElement('div');
  container.className = 'about-container';

  // More Button
  const moreButton = document.createElement('div')
  moreButton.className = 'more-btn'
  const moreButtonText = document.createElement('div')
  moreButtonText.textContent = 'More'
  const moreButtonIcon = document.createElement('i')
  moreButtonIcon.className = 'fas fa-chevron-right'

  moreButton.appendChild(moreButtonText)
  moreButton.appendChild(moreButtonIcon)

  // Less Button
  const lessButton = document.createElement('div')
  lessButton.className = 'less-btn'
  const lessButtonText = document.createElement('div')
  lessButtonText.textContent = 'Less'
  const lessButtonIcon = document.createElement('i')
  lessButtonIcon.className = 'fas fa-chevron-left'

  lessButton.appendChild(lessButtonIcon)
  lessButton.appendChild(lessButtonText)

  container.appendChild(createAboutTitle());
  container.appendChild(createOverviewSection());
  container.appendChild(createDetailsSection());
  container.appendChild(moreButton);
  container.appendChild(lessButton);

  return container;
}

const createAboutSection = () => {
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
 
  aboutSection.appendChild(createAboutContainer());

  return aboutSection;
};

export default createAboutSection;
