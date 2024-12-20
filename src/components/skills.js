import techsData from '../data/techsData';

const createSkills = (icon, className, description) => {
  const skill = document.createElement('div');

  if (icon) {
    skill.className = `skill ${className}`;
    const skillIcon = document.createElement('img');
    skillIcon.src = icon;
    const skillDescription = document.createElement('div');
    skillDescription.className = 'skill-description';
    skillDescription.textContent = description;
    skill.appendChild(skillIcon);
    skill.appendChild(skillDescription);
  } else {
    skill.className = `skill`;
  }

  return skill;
};

const createSkillsWrapper = (skillContainer) => {
  const skills = Object.values(techsData());
  let skillIndex = 0;

  for (let i = 0; i < 5; i += 1) {
    const skillsWrapper = document.createElement('div');
    skillsWrapper.className = 'skills-wrapper';

    if (i === 0 || i === 4) {
      for (let j = 0; j < 12; j += 1) {
        skillsWrapper.appendChild(createSkills(null, ''));
      }
    } else {
      for (let j = 0; j < 12; j += 1) {
        if (j >= 2 && j < 9 && skillIndex < skills.length) {
          skillsWrapper.appendChild(
            createSkills(
              skills[skillIndex].icon,
              skills[skillIndex].className,
              skills[skillIndex].description
            )
          );
          skillIndex += 1;
        } else {
          skillsWrapper.appendChild(createSkills(null, ''));
        }
      }
    }

    skillContainer.appendChild(skillsWrapper);
  }
};

const createSkillSection = () => {
  const skillSection = document.createElement('section');
  skillSection.id = 'skills';
  const skillHeader = document.createElement('h1');
  skillHeader.textContent = 'SKILLS';
  skillHeader.className = 'skills-header header';

  skillSection.appendChild(skillHeader);

  const skillContainer = document.createElement('div');
  skillContainer.className = 'skills-container';

  createSkillsWrapper(skillContainer);

  skillSection.appendChild(skillContainer);

  return skillSection;
};

export default createSkillSection;
