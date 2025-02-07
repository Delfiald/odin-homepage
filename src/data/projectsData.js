// Screenshot
import shoppingCart from '../assets/projects/shoppingCart.png';
import pokemonMemoryCard from '../assets/projects/pokemonMemoryCard.png';
import cvApplication from '../assets/projects/cvApplication.png';
import battleship from '../assets/projects/battleship.png';
import weatherApp from '../assets/projects/weatherApp.png';
import todoList from '../assets/projects/todoList.png';
import adminDashboard from '../assets/projects/adminDashboard.png';
import calculator from '../assets/projects/calculator.png';
import odinRecipes from '../assets/projects/odinRecipes.png';

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
    shoppingCart,
    'Shopping Cart',
    'Shopping cart application like an eCommerce platform, where users can browse products, add to cart, and manage purchases efficiently',
    [
      'Memory Challenge: Avoid duplicate clicks on 1025 unique Pokémon cards styled by type, with detailed stats and abilities.',
      'Difficulty Levels: Play on Easy, Medium, and Hard modes while tracking high scores to improve your skills.',
      'Responsive Design: Enjoy seamless gameplay on desktop and mobile devices.',
    ],
    [getIcon('react'), getIcon('js'), getIcon('html'), getIcon('css')],
    'https://dogeheck-pokemonmemory.netlify.app/',
    'https://github.com/Delfiald/memory-card'
  );
  // Projects 2
  projectsData.addProjects(
    pokemonMemoryCard,
    'Pokemon Memory Card',
    'Pokemon Memory Card is a memory game featuring 1025 unique Pokémon cards styled by type. Test your skills and explore detailed Pokémon info!',
    [
      'Memory Challenge: Avoid duplicate clicks on 1025 unique Pokémon cards styled by type, with detailed stats and abilities.',
      'Difficulty Levels: Play on Easy, Medium, and Hard modes while tracking high scores to improve your skills.',
      'Responsive Design: Enjoy seamless gameplay on desktop and mobile devices.',
    ],
    [getIcon('react'), getIcon('js'), getIcon('html'), getIcon('css')],
    'https://dogeheck-pokemonmemory.netlify.app/',
    'https://github.com/Delfiald/memory-card'
  );
  // Projects 3
  projectsData.addProjects(
    cvApplication,
    'CV Application',
    'Restaurant Page is a modular and responsive web app built with Webpack, offering interactive sections like home, menu, and about with efficient content loading.',
    [
      'ATS Mode: Optimize CVs with custom fonts and section rearrangement for ATS compatibility.',
      'Graphics Mode: Design visually appealing CVs with adjustable fonts, layouts, and colors.',
      'Live Preview: Real-time updates for all customization changes.',
      'User-Friendly Interface: Simplify CV creation with easy-to-use tools.',
    ],
    [getIcon('react'), getIcon('js'), getIcon('html'), getIcon('css')],
    'https://dogeheck-cv-application.netlify.app/',
    'https://github.com/Delfiald/cv-application'
  );
  // Projects 4
  projectsData.addProjects(
    battleship,
    'Battleship',
    'Battleship is a web-based adaptation of the classic game, offering strategic gameplay against AI or opponents, optimized for mobile and desktop.',
    [
      'Strategic Gameplay: Place ships with rotation options (long-press on mobile, right-click on desktop) and enjoy turn-based battles.',
      'AI Challenge Mode: Play against a computer with automated ship placement and attacks.',
      'User-Friendly: Responsive design with error prevention and a game-over screen to display results and restart.',
    ],
    [
      getIcon('js'),
      getIcon('html'),
      getIcon('css'),
      getIcon('jest'),
      getIcon('webpack'),
    ],
    'https://delfiald.github.io/odin-battleship/',
    'https://github.com/Delfiald/odin-battleship'
  );
  // Projects 5
  projectsData.addProjects(
    weatherApp,
    'Weather App',
    'Weather Apps provides accurate real-time updates with a sleek interface, using modern JavaScript for a seamless experience on any device.',
    [
      'Real-Time Weather & Unit Conversion: Fetch weather data by location or city and switch between Metric and Imperial units.',
      'Dynamic Backgrounds & Clear Visualization: Background changes based on weather, with clear display of temperature, humidity, and conditions.',
      'Responsive Design & Error Handling: Optimized for desktop and mobile, with smooth management of API and input errors.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    'https://delfiald.github.io/odin-weather-app/',
    'https://github.com/Delfiald/odin-weather-app'
  );
  // Projects 6
  projectsData.addProjects(
    todoList,
    'To-do List',
    'This Todo List app helps you organize and manage tasks effortlessly with a sleek interface and robust features to keep everything in one place.',
    [
      'Efficient Task Management: Add, edit, delete, and organize tasks by projects with custom icons.',
      'Quick Access Views: Filter tasks by due date or completion status.',
      'Persistent Data Storage: Keep tasks saved securely using localStorage.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    'https://delfiald.github.io/odin-todo-list/',
    'https://github.com/Delfiald/odin-todo-list'
  );
  // Projects 7
  projectsData.addProjects(
    adminDashboard,
    'Admin Dashboard',
    'Admin Dashboard is a responsive web application designed with CSS Grid, featuring an intuitive layout and an interactive collapsible sidebar for seamless navigation across sections.',
    [
      'Responsive Design: Layout adjusts seamlessly to different screen sizes, from desktops to mobile devices.',
      'Basic CRUD Operations: Includes Create, Read, Update, and Delete (CRUD) functionality for managing content.',
      'Interactive Sidebar: Collapsible sidebar for easy navigation across dashboard sections.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css')],
    'https://delfiald.github.io/odin-admin-dashboard/',
    'https://github.com/Delfiald/odin-admin-dashboard'
  );
  // Projects 8
  projectsData.addProjects(
    calculator,
    'Calculator',
    'RAHHHHHH, WHAT THE HECK IS A CALCULATOR??!!!! EVEN A 9-YEAR-OLD KID CAN BUILD THIS! 🔥🔥🔥 BUT HEY, IT HAS MULTIPLE OPERATORS, PARENTHESES, DECIMALS, AND NEGATIVES—PRETTY COOL, RIGHT? 👀',
    [
      'Multiple Operators & Parentheses: You can do all the math with MULTIPLE operators at once, even throw in some parentheses! 🤯',
      'Decimals & Negative Numbers: Because who needs just positive whole numbers? Negative numbers and decimals are HERE! 🥳',
      'Responsive & Keyboard Support: Works on ALL devices and you can even type it out like a boss with your keyboard! 💻📱',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css')],
    'https://delfiald.github.io/odin-calculator/',
    'https://github.com/Delfiald/odin-calculator'
  );
  // Projects 9
  projectsData.addProjects(
    odinRecipes,
    'Odin Recipes',
    'Odin Recipes is a simple, static recipe website built with plain HTML and CSS, focusing on clean design and responsive layouts.',
    [
      'Clean Layout: Easy-to-browse, organized recipe structure.',
      'Responsive Design: Looks great on any device.',
      'Static Content: All recipes are hardcoded for simplicity and speed.',
    ],
    [getIcon('html'), getIcon('css')],
    'https://delfiald.github.io/odin-recipes/',
    'https://github.com/Delfiald/odin-recipes'
  );
};

projectsList();

export default projectsData;
