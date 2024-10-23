const events = () => {
  const body = document.querySelector('body');

  const sectionScroll = (e) => {
    e.preventDefault();
    const indicator = e.target.closest('.indicator');
    if (indicator) {
      const targetSectionID = indicator.getAttribute('href');
      const targetSection = document.querySelector(targetSectionID);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const isInViewPort = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const getVisiblePercentage = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(windowHeight, rect.bottom);

    const visibleHeight = visibleBottom - visibleTop;

    return (visibleHeight / windowHeight) * 100;
  };

  const setIndicatorActive = () => {
    const sections = [
      document.getElementById('hero'),
      document.getElementById('about'),
      document.getElementById('skills'),
      document.getElementById('projects'),
    ];

    const indicators = document.querySelectorAll('.indicator');

    indicators.forEach((indicator) => {
      indicator.classList.remove('active');
    });

    let maxVisibleIndex = 0;
    let maxVisiblePercentage = 0;

    sections.forEach((section, index) => {
      const visiblePercentage = getVisiblePercentage(section);

      if (visiblePercentage > maxVisiblePercentage) {
        maxVisiblePercentage = visiblePercentage;
        maxVisibleIndex = index;
      }
    });

    indicators[maxVisibleIndex].classList.add('active');
  };

  const skillAnimationHandler = (() => {
    const skillsHeader = document.querySelector('.skills-header');
    const skills = document.querySelectorAll('.skill:has(img)');

    const addAnimation = () => {
      skillsHeader.style.animation = 'fade-in 1s ease-in-out forwards';

      skills.forEach((skill, index) => {
        if (!skill.classList.contains('active')) {
          setTimeout(() => {
            skill.classList.add('active');
          }, 75 * index);
        }
      });
    };

    const removeAnimation = () => {
      skillsHeader.style.animation = 'none';

      skills.forEach((skill) => {
        if (skill.classList.contains('active')) {
          skill.classList.remove('active');
        }
      });
    };

    return { addAnimation, removeAnimation };
  })();

  const checkBoxes = () => {
    const skillSection = document.getElementById('skills');
    if (skillSection) {
      const skillWrapper = skillSection.querySelector('.skills-wrapper');
      const skillHeader = skillSection.querySelector('.skills-header');
      const skillWrapperLast = skillSection.querySelector(
        '.skills-wrapper:nth-child(4)'
      );

      if (!isInViewPort(skillHeader) && !isInViewPort(skillWrapperLast)) {
        skillAnimationHandler.removeAnimation();
      } else if (isInViewPort(skillWrapper) || isInViewPort(skillWrapperLast)) {
        skillAnimationHandler.addAnimation();
      }
    }
  };

  window.addEventListener('scroll', () => {
    setIndicatorActive();
    checkBoxes();
  });

  body.addEventListener('click', (e) => {
    sectionScroll(e);
  });
};

export default events;
