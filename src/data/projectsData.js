// Screenshot
import projectsSS from '../assets/projects/image.png';

// Techs
import techsData from './techsData';

const getIcon = (techName) => {
  const techs = techsData();
  return {
    icon: techs[techName]?.icon,
    description: techs[techName]?.description,
  };
};

const projectsData = (() => {
  const projects = [];

  const addProjects = (
    screenshot,
    title,
    summary,
    features,
    techs,
    demo,
    repos
  ) => {
    const projectsObj = {
      id: projects.length + 1,
      screenshot,
      title,
      summary,
      features,
      techs,
      demo,
      repos,
    };

    projects.push(projectsObj);
  };

  const getProjects = () => projects;

  return {
    addProjects,
    getProjects,
  };
})();

const projectsList = () => {
  // Projects 1
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 2
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 3
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 4
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 5
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 6
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 7
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 8
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
  // Projects 9
  projectsData.addProjects(
    projectsSS,
    'test',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus reiciendis aspernatur sint tenetur et culpa hic. Harum, quia delectus.',
    [
      '1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
      '2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quas!',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    '#',
    '#'
  );
};

projectsList();

export default projectsData;
