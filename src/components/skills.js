const skillList = () => {
  const skills = [
    {
      icon: 'fas fa-javascript',
      className: 'js'
    },
    {
      icon: 'fas fa-html',
      className: 'html'
    },
    {
      icon: 'fas fa-css',
      className: 'css'
    },
    {
      icon: 'fas fa-java',
      className: 'java'
    },
    {
      icon: 'fas fa-react',
      className: 'react'
    },
    {
      icon: 'fas fa-php',
      className: 'php'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
    {
      icon: 'fas fa-codeIgniter',
      className: 'code-igniter'
    },
  ]

  return skills
}

const createSkills = (icon, className) => {
  const skill = document.createElement('div')

  if(icon){
    skill.className = `skill ${className}`
    const skillIcon = document.createElement('i')
    skillIcon.className = icon;
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