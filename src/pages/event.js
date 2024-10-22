const events = () => {
  const body = document.querySelector('body');

  const sectionScroll = (e) => {
    e.preventDefault();
    const indicator = e.target.closest('.indicator');
    if(indicator) {
      const targetSectionID = indicator.getAttribute('href');
      const targetSection = document.querySelector(targetSectionID);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  
  const isInViewPort = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  const skillAnimationHandler = (() => {
    const skillsHeader = document.querySelector('.skills-header')
    const skills = document.querySelectorAll('.skill:has(img)');

    const addAnimation = () => {
      skillsHeader.style.animation = 'fade-in 1s ease-in-out forwards'

      skills.forEach((skill, index) => {
        if (!skill.classList.contains('active')) {
          setTimeout(() => {
            skill.classList.add('active')
          }, 75 * index)
        }
      })
    }

    const removeAnimation = () => {
      skillsHeader.style.animation = 'none'
      
      skills.forEach((skill) => {
        if (skill.classList.contains('active')) {
          skill.classList.remove('active');
        }
      });
    }

    return {addAnimation, removeAnimation}
  })()

  const checkBoxes = () => {
    const skillSection = document.getElementById('skills')
    if(skillSection) {
      const skillWrapper = skillSection.querySelector('.skills-wrapper')
      const skillHeader = skillSection.querySelector('.skills-header')
      const skillWrapperLast = skillSection.querySelector('.skills-wrapper:nth-child(4)')
      
      if(!isInViewPort(skillHeader) && !isInViewPort(skillWrapperLast)) {
        skillAnimationHandler.removeAnimation()
      }else if(isInViewPort(skillWrapper) || isInViewPort(skillWrapperLast)) {
        skillAnimationHandler.addAnimation()
      }
    }
  }

  window.addEventListener('scroll', checkBoxes);

  body.addEventListener('click', (e) => {
    sectionScroll(e);
  })
}

export default events