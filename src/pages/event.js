import easterEgg from '../components/easter'

const events = () => {
  const body = document.querySelector('body');

  // Container Visible Percentage
  const getVisiblePercentage = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(windowHeight, rect.bottom);

    const visibleHeight = visibleBottom - visibleTop;

    return (visibleHeight / windowHeight) * 100;
  };

  // Hero
  const heroEventHandler = () => {
    setTimeout(() => {
      document.querySelector('.hero-container').classList.add('extend')
    }, 3250)
  }

  // Indicator
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

  // About Handler
  const aboutAnimationHandler = (() => {
    const aboutSection = document.getElementById('about');
    const aboutTitleLetters = document.querySelectorAll('.about-title div')
    const aboutNameSections = aboutSection.querySelectorAll('.name-section > *')
    const aboutDescriptionsSections = aboutSection.querySelectorAll('.description-section div')
    const moreBtn = document.querySelector('.more-btn')
    const detailSection = document.querySelector('.details-section')
    const aboutCTAText = document.querySelectorAll('.about-cta-text .word')
    const aboutCTAButton = document.querySelector('.linked-btn')
    const scrollWrapper = document.querySelector('.about-scroll-wrapper')
    const scrollLetter = scrollWrapper.querySelectorAll('.letter')

    const textShowHandler = (text) => {
      if(text.length > 0) {
        text.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('show')
          }, 35*index)
        })
      }
    }

    const textHideHandler = (text) => {
      if(text.length > 0) {
        text.forEach((item) => {
          item.classList.remove('show')
        })
      }else {
        text.classList.remove('show')
      }
    }

    const aboutScroll = () => {
      if(getVisiblePercentage(aboutSection) > 20){
        textShowHandler(aboutTitleLetters)
        textShowHandler(aboutNameSections)
        textShowHandler(aboutDescriptionsSections)
        moreBtn.classList.add('show')
        scrollWrapper.classList.add('show')
  
        textShowHandler(scrollLetter)
  
        if(aboutSection.classList.contains('more')) {
          textShowHandler(aboutCTAText)
          detailSection.classList.add('show')
          aboutCTAButton.classList.add('show')
        }
      }else {
        textHideHandler(aboutTitleLetters)
        textHideHandler(aboutNameSections)
        textHideHandler(aboutDescriptionsSections)
        textHideHandler(scrollLetter)
        textHideHandler(aboutCTAText)
        moreBtn.classList.remove('show')
        scrollWrapper.classList.remove('show')
        detailSection.classList.remove('show')
        aboutCTAButton.classList.remove('show')
      }
    }

    const aboutClick = (e) => {
      if(e.target.closest('#about .more-btn')) {
        textShowHandler(aboutCTAText)
        aboutSection.classList.add('more')
        detailSection.classList.add('show')
        aboutCTAButton.classList.add('show')
      }else if(e.target.closest('#about .less-btn')) {
        textHideHandler(aboutCTAText)
        aboutSection.classList.remove('more')
        detailSection.classList.remove('show')
        aboutCTAButton.classList.remove('show')
      }
    }

    return {aboutScroll, aboutClick}
  })()

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
      if (getVisiblePercentage(skillSection) > 10) {
        skillAnimationHandler.addAnimation();
      } else {
        skillAnimationHandler.removeAnimation();
      }
    }
  };
  
  // Scroll Event Listener
  window.addEventListener('scroll', () => {
    setIndicatorActive();
    aboutAnimationHandler.aboutScroll();
    checkBoxes();
  });
  
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
  
  const sectionHandler = (e) => {
    const indicator = e.target.closest('.indicator');
    if (indicator) {
      e.preventDefault();
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

  // Click Event Listener
  body.addEventListener('click', (e) => {
    menuHandler(e);
    luckyButtonHandler(e);
    aboutAnimationHandler.aboutClick(e);
    sectionHandler(e);
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

  // Mouse Enter EventListener
  heroText.addEventListener('mouseenter', () => {
    heroFontHandler.setFont()
  })

  heroEventHandler()
};

export default events;
