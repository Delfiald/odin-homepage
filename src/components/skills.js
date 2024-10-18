const createSkills = () => {
  const skill = document.createElement('div')
  skill.className = 'skill'

  return skill
}

const createSkillsWrapper = () => {
  const skillsWrapper = document.createElement('div')
  skillsWrapper.className = 'skills-wrapper'

  for(let i = 0; i < 12; i+=1) {
    skillsWrapper.appendChild(createSkills())
  }

  return skillsWrapper
}

const createSkillSection = () => {
  const skillSection = document.createElement('section')
  skillSection.className = 'skills'
  const skillHeader = document.createElement('h1')
  skillHeader.textContent = 'SKILLS'
  skillHeader.className = 'skills-header header'

  skillSection.appendChild(skillHeader);

  const skillContainer = document.createElement('div')
  skillContainer.className = 'skill-container'
  
  skillContainer.appendChild(createSkillsWrapper())
  skillContainer.appendChild(createSkillsWrapper())
  skillContainer.appendChild(createSkillsWrapper())
  skillContainer.appendChild(createSkillsWrapper())
  skillContainer.appendChild(createSkillsWrapper())

  skillSection.appendChild(skillContainer)
  return skillSection
}

export default createSkillSection