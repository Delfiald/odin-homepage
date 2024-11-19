// Screenshot
import battleship from '../assets/projects/battleship.png';
import weatherApp from '../assets/projects/weatherApp.png';
import todoList from '../assets/projects/todoList.png';
import restaurantPage from '../assets/projects/restaurantPage.png';
import library from '../assets/projects/library.png';
import tictactoe from '../assets/projects/tictactoe.png';
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
  // Projects 2
  projectsData.addProjects(
    weatherApp,
    'Weather App',
    'Weather Apps is a sleek and efficient application that delivers accurate, real-time weather updates with a visually engaging interface. By leveraging modern JavaScript and asynchronous programming, it ensures a seamless experience for users on any device.',
    [
      'Real-Time Weather & Unit Conversion: Fetch weather data by location or city and switch between Metric and Imperial units.',
      'Dynamic Backgrounds & Clear Visualization: Background changes based on weather, with clear display of temperature, humidity, and conditions.',
      'Responsive Design & Error Handling: Optimized for desktop and mobile, with smooth management of API and input errors.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    'https://delfiald.github.io/odin-weather-app/',
    'https://github.com/Delfiald/odin-weather-app'
  );
  // Projects 3
  projectsData.addProjects(
    todoList,
    'To-do List',
    'This project is a dynamic and user-friendly Todo List application designed to help you organize and manage your tasks effortlessly. With its sleek interface and robust features, the application ensures that you stay on top of your schedule while keeping everything in one place.',
    [
      'Efficient Task Management: Add, edit, delete, and organize tasks by projects with custom icons.',
      'Quick Access Views: Filter tasks by due date or completion status.',
      'Persistent Data Storage: Keep tasks saved securely using localStorage.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    'https://delfiald.github.io/odin-todo-list/',
    'https://github.com/Delfiald/odin-todo-list'
  );
  // Projects 4
  projectsData.addProjects(
    restaurantPage,
    'Restaurant Page',
    'Restaurant Page is a modular and responsive web app built with Webpack, offering interactive sections like home, menu, and about with efficient content loading.',
    [
      'Responsive Design & Efficient Loading: Optimized for all screen sizes with modular content handling.',
      'Bag Management & Checkout Logic: Add, edit, and remove items with real-time updates, and disable checkout when necessary.',
      'Order Confirmation: Modal notifications for confirmed orders, with an option to refresh.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css'), getIcon('webpack')],
    'https://delfiald.github.io/odin-restaurant-page/',
    'https://github.com/Delfiald/odin-restaurant-page'
  );
  // Projects 5
  projectsData.addProjects(
    library,
    'Library',
    'Library is a web-based app to manage and organize your book collection, offering a clean interface to track reading progress and book details.',
    [
      'Book Management: Add, delete, and track books with title, author, cover image, and reading status.',
      'Reading Progress: Manage statuses ("Read," "Not Read," "Not Finished") and track current page numbers.',
      'Responsive Design: Seamlessly works across devices with a clean card-based layout.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css')],
    'https://delfiald.github.io/odin-library/',
    'https://github.com/Delfiald/odin-library'
  );
  // Projects 6
  projectsData.addProjects(
    tictactoe,
    'Tic Tac Toe',
    'Tic Tac Toe is a JavaScript game featuring multiple modes, customizable settings, and responsive design, built to explore modules and closures.',
    [
      'Game Modes: Play human vs. human, human vs. computer, or watch computer vs. computer.',
      'Customizable Settings: Set player names, choose markers, and switch control between human and computer during the game.',
      'Responsive Design: Playable across devices with an intuitive interface.',
    ],
    [getIcon('js'), getIcon('html'), getIcon('css')],
    'https://delfiald.github.io/odin-tictactoe/',
    'https://github.com/Delfiald/odin-tictactoe'
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
