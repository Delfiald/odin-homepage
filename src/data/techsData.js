import js from '../assets/skills/js.svg';
import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import java from '../assets/skills/java.svg';
import react from '../assets/skills/react.svg';
import php from '../assets/skills/php.svg';
import codeIgniter from '../assets/skills/codeIgniter.svg';
import webpack from '../assets/skills/webpack.svg';
import git from '../assets/skills/git.svg';
import jest from '../assets/skills/jest.svg';
import mysql from '../assets/skills/mysql.svg';
import postgresql from '../assets/skills/postgresql.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import tailwind from '../assets/skills/tailwind.svg';

const techsData = () => {
  const techs = {
    js: {
      icon: js,
      className: 'js',
      description: 'Javascript',
    },
    html: {
      icon: html,
      className: 'html',
      description: 'HTML',
    },
    css: {
      icon: css,
      className: 'css',
      description: 'CSS',
    },
    java: {
      icon: java,
      className: 'java',
      description: 'Java',
    },
    react: {
      icon: react,
      className: 'react',
      description: 'React',
    },
    php: {
      icon: php,
      className: 'php',
      description: 'PHP',
    },
    webpack: {
      icon: webpack,
      className: 'webpack',
      description: 'Webpack',
    },
    git: {
      icon: git,
      className: 'git',
      description: 'Git',
    },
    jest: {
      icon: jest,
      className: 'jest',
      description: 'Jest',
    },
    mysql: {
      icon: mysql,
      className: 'mysql',
      description: 'MySQL',
    },
    postgresql: {
      icon: postgresql,
      className: 'postgresql',
      description: 'PostgreSQL',
    },
    codeIgniter: {
      icon: codeIgniter,
      className: 'code-igniter',
      description: 'CodeIgniter',
    },
    bootstrap: {
      icon: bootstrap,
      className: 'bootstrap',
      description: 'Bootstrap',
    },
    tailwind: {
      icon: tailwind,
      className: 'tailwind',
      description: 'Tailwind',
    },
  };

  return techs;
};

export default techsData;
