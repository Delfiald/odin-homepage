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
    },
    html: {
      icon: html,
      className: 'html',
    },
    css: {
      icon: css,
      className: 'css',
    },
    java: {
      icon: java,
      className: 'java',
    },
    react: {
      icon: react,
      className: 'react',
    },
    php: {
      icon: php,
      className: 'php',
    },
    webpack: {
      icon: webpack,
      className: 'webpack',
    },
    git: {
      icon: git,
      className: 'git',
    },
    jest: {
      icon: jest,
      className: 'jest',
    },
    mysql: {
      icon: mysql,
      className: 'mysql',
    },
    postgresql: {
      icon: postgresql,
      className: 'postgresql',
    },
    codeIgniter: {
      icon: codeIgniter,
      className: 'code-igniter',
    },
    bootstrap: {
      icon: bootstrap,
      className: 'bootstrap',
    },
    tailwind: {
      icon: tailwind,
      className: 'tailwind',
    },
  };

  return techs;
};

export default techsData