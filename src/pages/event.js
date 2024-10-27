import easterEgg from '../components/easter'

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
    } else if(e.target.closest('.scroll-down')) {
      const targetSection = document.querySelector('#about');
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

  const aboutTitleAnimationHandler = () => {
    const aboutTitle = document.querySelector('.about-title')
    const aboutTitleLetters = aboutTitle.querySelectorAll('div')

    if(isInViewPort(aboutTitle)){

      aboutTitleLetters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('show')
        }, 75*index)
      })
    }else {
      aboutTitleLetters.forEach((letter) => {
        letter.classList.remove('show')
      })
    }
  }

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

  // Hero
  const heroEventHandler = () => {
    setTimeout(() => {
      document.querySelector('.hero-container').classList.add('extend')
    }, 3250)
  }

  // Menu
  const menuHandler = (e) => {
    const menuButton = document.querySelector('#menu-btn')
    if(e.target.closest('#menu-btn')) {
      menuButton.classList.toggle('open')
    }
  }

  // Easter Egg
  const easterEggHandler = () => {
    const easterEggContainer = document.querySelector('.easter-egg')

    const dvdIcon = easterEggContainer.querySelector('.dvd')

    easterEggContainer.addEventListener('animationend', () => {
      dvdIcon.classList.add('move')

      if(dvdIcon.classList.contains('move')) {
        dvdIcon.style.transform = 'translate(calc(45vw - 50px), calc(45vh - 50px))';
      }
    })
  }

  // Lucky Button
  const luckyButtonHandler = (e) => {
    if(e.target.closest('.lucky-wrapper')) {
      document.querySelector('.lucky-btn').classList.toggle('active')
      const hero = document.querySelector('#hero .hero-container');
      hero.classList.toggle('easter')
      if(hero.classList.contains('easter')) {
        hero.appendChild(easterEgg());
        easterEggHandler()
      }else {
        const easterEggContainer = document.querySelector('.easter-egg')
        easterEggContainer.style.animation = 'turn-off .5s ease forwards'
        easterEggContainer.addEventListener('animationend', () => easterEggContainer.remove())
      }
    }
  }

  window.addEventListener('scroll', () => {
    setIndicatorActive();
    aboutTitleAnimationHandler();
    checkBoxes();
  });

  body.addEventListener('click', (e) => {
    sectionScroll(e);
    menuHandler(e);
    luckyButtonHandler(e)
  });

  const heroText = document.querySelector('.hero-wrapper h1')

  const heroFontHandler = (() => {
    const fontList = ['Manrope', 'Inter', 'Georgia', 'Sans-serif', 'Times New Roman', 'Playwrite GB S', 'Arima']
    
    let currentIndex = 0;
  
    const randomFont = () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * fontList.length);
      } while (randomIndex === currentIndex);
  
      currentIndex = randomIndex
  
      return randomIndex;
    }
  
    const setFont = () => {
      const fontIndex = randomFont()
      heroText.style.fontFamily = fontList[fontIndex]
    }

    return { setFont }
  })()

  heroText.addEventListener('mouseenter', () => {
    heroFontHandler.setFont()
  })

  heroEventHandler()
};

export default events;
