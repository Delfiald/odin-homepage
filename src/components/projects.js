const createProjectsTitle = () => {
  const projectsTitle = document.createElement('div');
  projectsTitle.className = 'projects-title';
  projectsTitle.textContent = 'PROJECTS';

  return projectsTitle;
};

const createProjectsDetails = () => {
  const projectsDetails = document.createElement('div');
  projectsDetails.className = 'projects-details';

  return projectsDetails;
};

const createProjectsCarousel = () => {
  const projectsCarousel = document.createElement('div');
  projectsCarousel.className = 'projects-carousel';

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
