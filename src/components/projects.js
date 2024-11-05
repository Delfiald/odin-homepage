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

const createIndicator = (carouselIndicator, index = 0) => {
  const indicator = document.createElement('div')
  indicator.className = 'carousel-indicator'
  indicator.dataset.carouselId = index;

  carouselIndicator.appendChild(indicator)
}

const createCarouselIndicator = () => {
  const carouselIndicator = document.createElement('div')
  carouselIndicator.className = 'carousel-indicator-wrapper'

  for(let i = 0; i < 3; i+=1) {
    createIndicator(carouselIndicator, i)
  }

  const indicatorBar = document.createElement('div')
  indicatorBar.className = 'indicator-bar'

  carouselIndicator.appendChild(indicatorBar)

  return carouselIndicator
}

const createProjectsOverview = () => {
  const projectsOverview = document.createElement('div');
  projectsOverview.className = 'projects-overview';

  projectsOverview.appendChild(createProjectsDetails());
  projectsOverview.appendChild(createProjectsCarousel());
  projectsOverview.appendChild(createCarouselIndicator());

  return projectsOverview;
};

const createProjectsList = (projectsList, index = 0) => {
  const projects = document.createElement('div')
  projects.className = `project card hide`
  projects.dataset.projectId = index;

  const projectCardImage = document.createElement('div')
  projectCardImage.className = 'card-image'
  const projectImage = document.createElement('img')
  projectImage.src = projectImg

  projectCardImage.appendChild(projectImage)
  
  const projectCardDetails = document.createElement('div')
  projectCardDetails.className = 'card-details'
  const projectCardTitle = document.createElement('div')
  projectCardTitle.className = 'card-title'
  projectCardTitle.textContent = 'Title'
  const projectCardSummary = document.createElement('div')
  projectCardSummary.className = 'card-summary'
  projectCardSummary.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.'
  const projectCardTechs = document.createElement('div')
  projectCardTechs.className = 'card-techs'

  for(let i = 0; i < 4; i+=1) {
    const techIconWrapper = document.createElement('div')
    techIconWrapper.className = `tech-${i}`
    const techImg = document.createElement('img')
    techImg.src = javascript
    techIconWrapper.appendChild(techImg)
    projectCardTechs.appendChild(techIconWrapper)
  }

  const projectCardBottom = document.createElement('div')
  projectCardBottom.className = 'card-bottom'
  
  const projectDemoButton = document.createElement('a')
  projectDemoButton.href = '#'
  projectDemoButton.target = '_blank'
  projectDemoButton.rel = 'noopener noreferrer'
  projectDemoButton.className = 'card-demo-button'
  const demoButtonText = document.createElement('div')
  demoButtonText.textContent = 'Demo'
  const demoButtonIcon = document.createElement('i')
  demoButtonIcon.className = 'fas fa-chevron-right'
  projectDemoButton.appendChild(demoButtonText)
  projectDemoButton.appendChild(demoButtonIcon)

  const projectCardRepository = document.createElement('a')
  projectCardRepository.href = '#'
  projectCardRepository.target = '_blank'
  projectCardRepository.rel = 'noopener noreferrer'
  projectCardRepository.className = 'card-repository-button'
  const githubIcon = document.createElement('i')
  githubIcon.className = 'fab fa-github'
  projectCardRepository.appendChild(githubIcon)

  projectCardBottom.appendChild(projectDemoButton)
  projectCardBottom.appendChild(projectCardRepository)

  projectCardDetails.appendChild(projectCardTitle)
  projectCardDetails.appendChild(projectCardSummary)
  projectCardDetails.appendChild(projectCardTechs)
  projectCardDetails.appendChild(projectCardBottom)

  projects.appendChild(projectCardImage)
  projects.appendChild(projectCardDetails)

  projectsList.appendChild(projects)
}

const createProjectsListWrapper = () => {
  const projectsListWrapper = document.createElement('div');
  projectsListWrapper.className = 'projects-list-wrapper';

  const projectsList = document.createElement('div');
  projectsList.className = 'projects-list';

  const projectListHeader = document.createElement('div')
  projectListHeader.className = 'project-list-header'
  const moreProjectBtn = document.createElement('div')
  moreProjectBtn.className = 'more-project-btn'
  const moreProjectBtnIcon = document.createElement('div')
  moreProjectBtnIcon.className = 'more-project-icon'

  for(let i = 0; i < 2; i+=1) {
    const moreIcon = document.createElement('i')
    moreIcon.className = 'fas fa-chevron-down'
    moreProjectBtnIcon.appendChild(moreIcon)
  }
  const moreProjectBtnText = document.createElement('div')
  moreProjectBtnText.textContent = 'More Projects'
  moreProjectBtn.appendChild(moreProjectBtnIcon)
  moreProjectBtn.appendChild(moreProjectBtnText)

  projectListHeader.appendChild(moreProjectBtn)

  const projectsRow = document.createElement('div')
  projectsRow.className = 'card-row'

  const projectsRow2 = document.createElement('div')
  projectsRow2.className = 'card-row'

  for(let i = 0; i < 6; i+=1) {
    if(i % 2 === 0) {
      createProjectsList(projectsRow, i)
    }else {
      createProjectsList(projectsRow2, i)
    }
  }

  projectsList.appendChild(projectsRow)
  projectsList.appendChild(projectsRow2)

  projectsListWrapper.appendChild(projectListHeader);
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
