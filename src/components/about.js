import linkedin from '../assets/link/linkedin.svg';
import letterSeparator from '../helpers/letterSeparator';

const createAboutTitle = () => {
  const aboutTitle = document.createElement('div');
  aboutTitle.className = 'about-title';

  letterSeparator('ABOUT', aboutTitle);

  return aboutTitle;
};

const createSeparateWords = (sentence, container) => {
  sentence.split(' ').forEach((word) => {
    const wordDiv = document.createElement('div');
    wordDiv.textContent = word;
    wordDiv.className = 'word';
    container.appendChild(wordDiv);
  });
};

const createOverviewSection = () => {
  const overview = document.createElement('div');
  overview.className = 'about-overview';

  const nameSection = document.createElement('div');
  nameSection.className = 'name-section';
  const nameSectionText = `Hi, my name is Aldi`;
  createSeparateWords(nameSectionText, nameSection);
  const decorationSpan = document.createElement('span');

  const descriptionSection = document.createElement('div');
  descriptionSection.className = 'description-section';
  const descriptionSectionText = `I'm a Frontend Developer from Indonesia`;
  createSeparateWords(descriptionSectionText, descriptionSection);

  const scrollDown = document.createElement('div');
  scrollDown.className = 'about-scroll-down';
  const scrollDownWrapper = document.createElement('div');
  scrollDownWrapper.className = 'about-scroll-wrapper';

  const scrollText = document.createElement('div');
  scrollText.classList = 'scroll-down-text';
  letterSeparator('SCROLL', scrollText);
  scrollDownWrapper.appendChild(scrollText);
  scrollDown.appendChild(scrollDownWrapper);

  nameSection.appendChild(decorationSpan);

  overview.appendChild(nameSection);
  overview.appendChild(descriptionSection);
  overview.appendChild(scrollDown);

  return overview;
};

const createDetailsSection = () => {
  const details = document.createElement('div');
  details.className = 'about-details';

  const detailsContent = document.createElement('div');
  detailsContent.className = 'details-section';
  const detailsContentText = document.createElement('div');
  detailsContentText.className = 'details-text';
  detailsContentText.textContent = `As a recent graduate with a strong interest in front-end development, I'm committed to making web apps that are clear, responsive, and easy to use. I've solidified my knowledge of HTML, CSS, JavaScript, and contemporary web development frameworks. My portfolio includes projects that demonstrate my ability to solve problems, pay close attention to detail, and be dedicated to lifelong learning. I'm eager to contribute my skills to deliver innovative and offer innovative web solutions.`;
  detailsContent.appendChild(detailsContentText);

  const detailsLink = document.createElement('div');
  detailsLink.className = 'link-section';
  const detailsLinkText = document.createElement('div');
  detailsLinkText.className = 'about-cta-text';
  const detailLinkSentence = 'Explore my LinkedIn profile!';
  createSeparateWords(detailLinkSentence, detailsLinkText);

  const detailsLinkButton = document.createElement('a');
  detailsLinkButton.href = 'https://linkedin.com/in/m-aldi-gunawan';
  detailsLinkButton.rel = 'noopener noreferrer';
  detailsLinkButton.target = '_blank';
  detailsLinkButton.className = 'linked-btn';
  const linkedInIcon = document.createElement('div');
  linkedInIcon.className = 'grayscale';

  const linkedInImage = document.createElement('img');
  linkedInImage.src = linkedin;
  linkedInIcon.appendChild(linkedInImage);

  const linkedInIconColored = document.createElement('div');
  linkedInIconColored.className = 'colored';

  const linkedInImageColored = document.createElement('img');
  linkedInImageColored.src = linkedin;
  linkedInIconColored.appendChild(linkedInImageColored);

  detailsLinkButton.appendChild(linkedInIcon);
  detailsLinkButton.appendChild(linkedInIconColored);

  detailsLink.appendChild(detailsLinkText);
  detailsLink.appendChild(detailsLinkButton);

  details.appendChild(detailsContent);
  details.appendChild(detailsLink);

  return details;
};

const createAboutContainer = () => {
  const container = document.createElement('div');
  container.className = 'about-container';

  // More Button
  const moreButton = document.createElement('div');
  moreButton.className = 'more-btn';
  const moreButtonText = document.createElement('div');
  moreButtonText.textContent = 'More';
  const moreButtonIcon = document.createElement('i');
  moreButtonIcon.className = 'fas fa-chevron-right';

  moreButton.appendChild(moreButtonText);
  moreButton.appendChild(moreButtonIcon);

  // Less Button
  const lessButton = document.createElement('div');
  lessButton.className = 'less-btn';
  const lessButtonText = document.createElement('div');
  lessButtonText.textContent = 'Less';
  const lessButtonIcon = document.createElement('i');
  lessButtonIcon.className = 'fas fa-chevron-left';

  lessButton.appendChild(lessButtonIcon);
  lessButton.appendChild(lessButtonText);

  container.appendChild(createAboutTitle());
  container.appendChild(createOverviewSection());
  container.appendChild(createDetailsSection());
  container.appendChild(moreButton);
  container.appendChild(lessButton);

  return container;
};

const createAboutSection = () => {
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';

  aboutSection.appendChild(createAboutContainer());

  return aboutSection;
};

export default createAboutSection;
