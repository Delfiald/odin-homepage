import js from '../assets/skills/js.svg'
import html from '../assets/skills/html.svg'
import css from '../assets/skills/css.svg'
import java from '../assets/skills/java.svg'
import react from '../assets/skills/react.svg'
import php from '../assets/skills/php.svg'
import codeIgniter from '../assets/skills/codeIgniter.svg'
import webpack from '../assets/skills/webpack.svg'
import git from '../assets/skills/git.svg'
import jest from '../assets/skills/jest.svg'
import mysql from '../assets/skills/mysql.svg'
import postgresql from '../assets/skills/postgresql.svg'
import bootstrap from '../assets/skills/bootstrap.svg'
import tailwind from '../assets/skills/tailwind.svg'

const skillList = () => {
  const skills = [
    {
      icon: js,
      className: 'js'
    },
    {
      icon: html,
      className: 'html'
    },
    {
      icon: css,
      className: 'css'
    },
    {
      icon: java,
      className: 'java'
    },
    {
      icon: react,
      className: 'react'
    },
    {
      icon: php,
      className: 'php'
    },
    {
      icon: webpack,
      className: 'webpack'
    },
    {
      icon: git,
      className: 'git'
    },
    {
      icon: jest,
      className: 'jest'
    },
    {
      icon: mysql,
      className: 'mysql'
    },
    {
      icon: postgresql,
      className: 'postgresql'
    },
    {
      icon: codeIgniter,
      className: 'code-igniter'
    },
    {
      icon: bootstrap,
      className: 'bootstrap'
    },
    {
      icon: tailwind,
      className: 'tailwind'
    },
  ]

  return skills
}

const createSkills = (icon, className) => {
  const skill = document.createElement('div')

  if(icon){
    skill.className = `skill ${className}`
    const skillIcon = document.createElement('img')
    skillIcon.src = icon;
    skill.appendChild(skillIcon)
  }else {
    skill.className = `skill`
  }

  return skill
}

const createSkillsWrapper = (skillContainer) => {
  const skills = skillList()
  let skillIndex = 0;

  for(let i = 0; i < 5; i+=1) {
    const skillsWrapper = document.createElement('div')
    skillsWrapper.className = 'skills-wrapper'

    if (i === 0 || i === 4) {
      for (let j = 0; j < 12; j+=1) {
        skillsWrapper.appendChild(createSkills(null, ''));
      }
    }else {
      for (let j = 0; j < 12; j += 1) {
        if (j >= 2 && j < 9 && skillIndex < skills.length) {
          skillsWrapper.appendChild(createSkills(skills[skillIndex].icon, skills[skillIndex].className));
          skillIndex+=1;
        } else {
          skillsWrapper.appendChild(createSkills(null, ''));
        }
      }
    }

    skillContainer.appendChild(skillsWrapper);
  }
}

const createSkillSection = () => {
  const skillSection = document.createElement('section')
  skillSection.id = 'skills'
  const skillHeader = document.createElement('h1')
  skillHeader.textContent = 'SKILLS'
  skillHeader.className = 'skills-header header'

  skillSection.appendChild(skillHeader);

  const skillContainer = document.createElement('div')
  skillContainer.className = 'skills-container'
  
  createSkillsWrapper(skillContainer)

  skillSection.appendChild(skillContainer)

  return skillSection
}

export default createSkillSection