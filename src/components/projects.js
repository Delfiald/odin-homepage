import projectImg from '../assets/projects/image.png'
import javascript from '../assets/skills/js.svg'

const createProjectsTitle = () => {
  const projectsTitle = document.createElement('div');
  projectsTitle.className = 'projects-title';
  projectsTitle.textContent = 'PROJECTS';

  return projectsTitle;
};

const createFeaturesList = (featuresList, index = 0) => {
  const feature = document.createElement('li')
  feature.className = `feature-${index}`
  feature.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!'

  featuresList.appendChild(feature)
}

const createTechStackList = (techStack, index) => {
  const tech = document.createElement('div')
  tech.className = `tech-${index}`
  const techIcon = document.createElement('img')
  techIcon.src = javascript
  techIcon.alt = 'javascript'
  tech.appendChild(techIcon)

  techStack.appendChild(tech)
}

const createDetailsItem = (projectsDetailsContainer, index = 0) => {
  const projectsDetails = document.createElement('div');
  projectsDetails.className = 'projects-details';
  projectsDetails.dataset.projectId = index;

  const projectsSummary = document.createElement('div')
  projectsSummary.className = 'project-summary'
  const projectsSummaryHeader = document.createElement('div')
  projectsSummaryHeader.className = 'details-header'
  const summaryText = document.createElement('h3')
  summaryText.textContent = 'Summary'
  const projectsSummaryText = document.createElement('div')
  projectsSummaryText.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.'
  projectsSummaryHeader.appendChild(summaryText)
  projectsSummary.appendChild(projectsSummaryHeader)
  projectsSummary.appendChild(projectsSummaryText)

  const projectsFeatures = document.createElement('div')
  projectsFeatures.className = 'project-feat'
  const projectsFeaturesHeader = document.createElement('div')
  projectsFeaturesHeader.className = 'details-header'
  const featureText = document.createElement('h3')
  featureText.textContent = 'Features'
  const featuresList = document.createElement('ul')
  featuresList.classList = 'feats-list'

  for(let i = 0; i < 2; i+=1) {
    createFeaturesList(featuresList, i)
  }

  projectsFeaturesHeader.appendChild(featureText)
  projectsFeatures.appendChild(projectsFeaturesHeader)
  projectsFeatures.appendChild(featuresList)

  const projectsTech = document.createElement('div')
  projectsTech.className = 'project-tech'
  const projectsTechHeader = document.createElement('div')
  projectsTechHeader.className = 'details-header'
  const techText = document.createElement('h3')
  techText.textContent = 'Tech Stacks'
  const techStack = document.createElement('div')
  techStack.className = 'tech-stack'

  for(let i = 0; i < 4; i+=1) {
    createTechStackList(techStack, i)
  }

  projectsTechHeader.appendChild(techText)
  projectsTech.appendChild(projectsTechHeader)
  projectsTech.appendChild(techStack)

  projectsDetails.appendChild(projectsSummary)
  projectsDetails.appendChild(projectsFeatures)
  projectsDetails.appendChild(projectsTech)

  projectsDetailsContainer.appendChild(projectsDetails)
}

const createProjectsDetails = () => {
  const projectsDetailsContainer = document.createElement('div');
  projectsDetailsContainer.className = 'projects-details-container';

  for(let i = 0; i < 3; i+=1){
    createDetailsItem(projectsDetailsContainer, i)
  }

  return projectsDetailsContainer;
};

const createCarouselItem = (projectsCarousel, index = 0) => {
  const carouselWrapper = document.createElement('div')
  carouselWrapper.className = 'carousel-wrapper'
  carouselWrapper.dataset.projectId = index;

  const projectRepos = document.createElement('div')
  projectRepos.className = 'project-repo'
  const reposText = document.createElement('div')
  reposText.textContent = 'Go To Repository'
  const projectReposLink = document.createElement('a')
  projectReposLink.target = '_blank'
  projectReposLink.href = '#'
  const githubIcon = document.createElement('i')
  githubIcon.className = 'fab fa-github'
  projectReposLink.appendChild(githubIcon)
  projectRepos.appendChild(projectReposLink)
  projectRepos.appendChild(reposText)

  const projectImageWrapper = document.createElement('div')
  projectImageWrapper.className = 'project-image'
  const projectImage = document.createElement('img')
  projectImage.src = projectImg
  projectImage.alt = 'Project Image'
  projectImageWrapper.appendChild(projectImage)

  const carouselBottom = document.createElement('div')
  carouselBottom.className = 'carousel-bottom'

  const projectName = document.createElement('div')
  projectName.className = 'project-title'
  const projectNameText = document.createElement('div')
  projectNameText.textContent = 'Title'
  projectName.appendChild(projectNameText)

  const demoButton = document.createElement('a')
  demoButton.target = '_blank'
  demoButton.href = '#'
  demoButton.rel = 'noopener noreferrer'
  demoButton.className = 'demo-button'
  const demoText = document.createElement('div')
  demoText.className = 'demo-text'
  demoText.textContent = 'Demo'
  const demoIcon = document.createElement('i')
  demoIcon.className = 'fas fa-chevron-right'
  demoButton.appendChild(demoText)
  demoButton.appendChild(demoIcon)

  carouselBottom.appendChild(projectName)
  carouselBottom.appendChild(demoButton)

  carouselWrapper.appendChild(projectRepos)
  carouselWrapper.appendChild(projectImageWrapper)
  carouselWrapper.appendChild(carouselBottom)

  projectsCarousel.appendChild(carouselWrapper)
}

const createProjectsCarousel = () => {
  const projectsCarousel = document.createElement('div');
  projectsCarousel.className = 'projects-carousel';

  for(let i = 0; i < 3; i+=1) {
    createCarouselItem(projectsCarousel, i)
  }

  return projectsCarousel;
};

const createProjectsOverview = () => {
  const projectsOverview = document.createElement('div');
  projectsOverview.className = 'projects-overview';

  projectsOverview.appendChild(createProjectsDetails());
  projectsOverview.appendChild(createProjectsCarousel());

  return projectsOverview;
};

const createProjectsListWrapper = () => {
  const projectsListWrapper = document.createElement('div');
  projectsListWrapper.className = 'projects-list-wrapper';

  const projectsList = document.createElement('div');
  projectsList.className = 'projects-list';

  projectsListWrapper.appendChild(projectsList);

  return projectsListWrapper;
};

const createProjectsContainer = () => {
  const container = document.createElement('div');
  container.className = 'projects-container';

  container.appendChild(createProjectsTitle());
  container.appendChild(createProjectsOverview());
  container.appendChild(createProjectsListWrapper());

  return container;
};

const createPortSection = () => {
  const portSection = document.createElement('section');
  portSection.id = 'projects';

  portSection.appendChild(createProjectsContainer());

  return portSection;
};

export default createPortSection;
