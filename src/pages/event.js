import menu from '../components/menu';

const events = () => {
  const body = document.querySelector('body');

  // Container Visible Percentage
  const getVisiblePercentage = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(windowHeight, rect.bottom);

    const visibleHeight = visibleBottom - visibleTop;

    return (visibleHeight / windowHeight) * 100;
  };

  const disabledScroll = (() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    const setScrollable = () => {
      body.classList.toggle('not-scrollable');
    };

    return { setScrollable };
  })();

  // Hero
  const heroEventHandler = (() => {
    const hero = document.getElementById('hero');
    const heroContainer = hero.querySelector('.hero-container');
    const helloText = hero.querySelectorAll('.hero-text:first-child > div');
    const loremText = hero.querySelectorAll('.hero-text:nth-child(2) > div');
    const dogeText = hero.querySelectorAll('.hero-text:nth-child(3) > div');
    const hiText = hero.querySelectorAll('.hero-text:nth-child(4) > div');
    const textDot = hero.querySelector('.hero-text span');
    const decorationLine = hero.querySelectorAll('.decoration-line');
    const decorTextOne = hero.querySelectorAll(
      '.decoration-line:nth-child(3) .letter'
    );
    const decorTextTwo = hero.querySelectorAll(
      '.decoration-line:nth-child(4) .letter'
    );
    const heroText = hero.querySelector('.hero-wrapper h1 .hero-main-text');
    const decorTextThree = hero.querySelectorAll(
      '.decoration-date .date-wrapper > div'
    );
    const angleDecorationsTop = hero.querySelector(
      '.decoration-angle:last-child'
    );
    const angleDecorationsBottom = hero.querySelector('.decoration-angle');
    const heroMainText = heroText.querySelectorAll('div');

    const setInitialLoadTextPositions = () => {
      const texts = [helloText, loremText, dogeText, hiText];
      texts.forEach((textArray) => {
        textArray.forEach((textElement, i) => {
          const element = textElement;
          element.style.left = `${5.5 * i}rem`;
        });
      });
    };

    // Change Fonts
    const heroFontHandler = (() => {
      const fontList = [
        'Manrope',
        'Inter',
        'Georgia',
        'Sans-serif',
        'Times New Roman',
        'Playwrite GB S',
        'Arima',
      ];

      let currentIndex = 0;

      const getRandomFontIndex = () => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * fontList.length);
        } while (randomIndex === currentIndex);

        currentIndex = randomIndex;

        return randomIndex;
      };

      const applyRandomFont = () => {
        const fontIndex = getRandomFontIndex();
        heroText.style.fontFamily = fontList[fontIndex];
      };

      return { applyRandomFont };
    })();

    const addHeroTextHoverEffect = () => {
      heroText.addEventListener('mouseenter', heroFontHandler.applyRandomFont);
    };

    const textAnimationHandler = (() => {
      const toggleClassOnText = (text, time, className, add = true) => {
        text.forEach((element, index) => {
          setTimeout(() => {
            element.classList.toggle(className, add);
          }, time * index);
        });
      };

      return {
        addClassToText: (text, time, className) =>
          toggleClassOnText(text, time, className, true),
        removeClassFromText: (text, time, className) =>
          toggleClassOnText(text, time, className, false),
      };
    })();

    const displayHeroDecorations = () => {
      textAnimationHandler.addClassToText(decorationLine, 0, 'show');
      textAnimationHandler.addClassToText(decorTextOne, 75, 'show');
      textAnimationHandler.addClassToText(decorTextTwo, 75, 'show');
      textAnimationHandler.addClassToText(decorTextThree, 75, 'show');

      angleDecorationsTop.classList.remove('hide');
      angleDecorationsBottom.classList.remove('hide');
    };

    const hideHeroDecorations = () => {
      heroContainer.classList.add('hide');

      textAnimationHandler.addClassToText(heroMainText, 0, 'hide');

      textAnimationHandler.removeClassFromText(decorationLine, 0, 'show');
      textAnimationHandler.removeClassFromText(decorTextOne, 0, 'show');
      textAnimationHandler.removeClassFromText(decorTextTwo, 0, 'show');
      textAnimationHandler.removeClassFromText(decorTextThree, 0, 'show');

      angleDecorationsTop.classList.add('hide');
      angleDecorationsBottom.classList.add('hide');
    };

    // Animation Handler
    const animateHeroSequence = () => {
      const triggerTextAnimationSequence = () => {
        const ANIM_TIME = 50;

        setTimeout(() => {
          textAnimationHandler.addClassToText(helloText, ANIM_TIME, 'hide');
          textAnimationHandler.addClassToText(loremText, ANIM_TIME, 'show');
        }, 1000);

        setTimeout(() => {
          textAnimationHandler.addClassToText(loremText, ANIM_TIME, 'hide');
          textAnimationHandler.addClassToText(dogeText, ANIM_TIME, 'show');
        }, 2350);

        setTimeout(() => {
          textAnimationHandler.addClassToText(dogeText, ANIM_TIME, 'hide');
          textAnimationHandler.addClassToText(hiText, ANIM_TIME, 'show');
        }, 2500);
      };

      const animateFinalTextPositioning = () => {
        const centerTextElements = () => {
          hiText.forEach((textElement) => {
            const element = textElement;
            element.style.left = '50%';
            element.style.transform = 'translateX(-50%)';
          });

          const dotElement = textDot;
          dotElement.style.right = '50%';
          dotElement.style.transform = 'translate(50%, -50%)';
        };

        const hideFinalTextElements = () => {
          hiText.forEach((textElement) => {
            const element = textElement;
            element.style.animation = 'hide-hero-text .15s ease forwards';
          });

          const dotElement = textDot;
          dotElement.style.animation = 'hide-hero-text .15s ease forwards';
        };

        const revealMainHeroText = () => {
          displayHeroDecorations();

          heroText.style.animation =
            'hero-main-text-show 3s cubic-bezier(0.7, 0, 0.5, 0) forwards';

          disabledScroll.setScrollable();
          addHeroTextHoverEffect();
        };

        setTimeout(centerTextElements, 4000);
        setTimeout(hideFinalTextElements, 4250);
        setTimeout(revealMainHeroText, 4500);
      };

      const expandHeroBackground = () => {
        setTimeout(() => {
          heroContainer.classList.add('extend');
        }, 4000);
      };

      disabledScroll.setScrollable();
      setInitialLoadTextPositions();
      triggerTextAnimationSequence();
      animateFinalTextPositioning();
      expandHeroBackground();
    };

    const monitorHeroScroll = () => {
      if (getVisiblePercentage(hero) > 20) {
        heroContainer.classList.remove('hide');

        textAnimationHandler.removeClassFromText(heroMainText, 100, 'hide');

        displayHeroDecorations();
      } else {
        hideHeroDecorations();
      }
    };

    return {
      animateHeroSequence,
      monitorHeroScroll,
    };
  })();

  // Indicator
  const setIndicatorActive = () => {
    const sections = [
      document.getElementById('hero'),
      document.getElementById('about'),
      document.getElementById('skills'),
      document.getElementById('projects'),
    ];

    const indicators = document.querySelectorAll(
      '.indicator-wrapper .indicator'
    );

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
    const aboutTitleLetters = document.querySelectorAll('.about-title div');
    const aboutNameSections =
      aboutSection.querySelectorAll('.name-section > *');
    const aboutDescriptionsSections = aboutSection.querySelectorAll(
      '.description-section div'
    );
    const moreBtn = document.querySelector('.more-btn');
    const detailSection = document.querySelector('.details-section');
    const aboutCTAText = document.querySelectorAll('.about-cta-text .word');
    const aboutCTAButton = document.querySelector('.linked-btn');
    const scrollWrapper = document.querySelector('.about-scroll-wrapper');
    const scrollLetter = scrollWrapper.querySelectorAll('.letter');

    const textShowHandler = (text) => {
      if (text.length > 0) {
        text.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('show');
          }, 35 * index);
        });
      }
    };

    const textHideHandler = (text) => {
      if (text.length > 0) {
        text.forEach((item) => {
          item.classList.remove('show');
        });
      } else {
        text.classList.remove('show');
      }
    };

    const aboutScroll = () => {
      if (getVisiblePercentage(aboutSection) > 20) {
        textShowHandler(aboutTitleLetters);
        textShowHandler(aboutNameSections);
        textShowHandler(aboutDescriptionsSections);
        moreBtn.classList.add('show');
        scrollWrapper.classList.add('show');

        textShowHandler(scrollLetter);

        if (aboutSection.classList.contains('more')) {
          textShowHandler(aboutCTAText);
          detailSection.classList.add('show');
          aboutCTAButton.classList.add('show');
        }
      } else {
        textHideHandler(aboutTitleLetters);
        textHideHandler(aboutNameSections);
        textHideHandler(aboutDescriptionsSections);
        textHideHandler(scrollLetter);
        textHideHandler(aboutCTAText);
        moreBtn.classList.remove('show');
        scrollWrapper.classList.remove('show');
        detailSection.classList.remove('show');
        aboutCTAButton.classList.remove('show');
      }
    };

    const aboutClick = (e) => {
      if (e.target.closest('#about .more-btn')) {
        textShowHandler(aboutCTAText);
        aboutSection.classList.add('more');
        detailSection.classList.add('show');
        aboutCTAButton.classList.add('show');
      } else if (e.target.closest('#about .less-btn')) {
        textHideHandler(aboutCTAText);
        aboutSection.classList.remove('more');
        detailSection.classList.remove('show');
        aboutCTAButton.classList.remove('show');
      }
    };

    return { aboutScroll, aboutClick };
  })();

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

  // Projects Section
  // Carousel Scroll
  const carouselScroll = (() => {
    const projectDetailsContainer = document.querySelector(
      '.projects-details-container'
    );

    const carouselContainer = document.querySelector('.projects-carousel');

    const detailItems =
      projectDetailsContainer.querySelectorAll('.projects-details');

    const items = carouselContainer.querySelectorAll('.carousel-wrapper');

    const indicatorItems = document.querySelectorAll('.carousel-indicator');

    const indicatorBar = document.querySelector('.indicator-bar');

    detailItems[0].classList.add('active');

    let scrollAmount = 0;
    let detailsScrollAmount = 0;
    const scrollStep = items[0].clientWidth;
    const detailsScrollStep = detailItems[0].clientWidth;
    const scrollInterval = 5000;

    const carouselWidth =
      carouselContainer.scrollWidth - carouselContainer.clientWidth;

    let intervalId = null;

    const startIndicatorBar = () => {
      setTimeout(() => {
        indicatorBar.style.animation = 'indicator-bar 4.25s linear forwards';
      }, 750);
    };

    const pauseIndicatorBar = () => {
      indicatorBar.style.animation = 'none';
    };

    const indicatorBarTransitions = (index) => {
      const gap = 0.25;
      const itemWidthPercentage = 100 / indicatorItems.length;
      indicatorBar.style.left = `calc(${index * itemWidthPercentage}% + ${index * gap}rem)`;

      indicatorBar.style.animation = 'none';
      startIndicatorBar();
    };

    const scroll = (projectId) => {
      if (projectId) {
        items.forEach((item) => {
          if (item.dataset.projectId === projectId) {
            scrollAmount = scrollStep * (projectId - 1);
            detailsScrollAmount = detailsScrollStep * (projectId - 1);
          }
        });
      }

      if (scrollAmount >= carouselWidth) {
        scrollAmount = 0;
        detailsScrollAmount = 0;
      }

      carouselContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });

      projectDetailsContainer.scrollTo({
        left: detailsScrollAmount,
        behavior: 'smooth',
      });

      const activeIndex = Math.round(detailsScrollAmount / detailsScrollStep);

      detailItems.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      items.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      indicatorItems.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add('active');
          indicatorBarTransitions(index);
        } else {
          item.classList.remove('active');
        }
      });

      scrollAmount += scrollStep;
      detailsScrollAmount += detailsScrollStep;
    };

    scroll();

    const startCarousel = () => {
      if (!intervalId) {
        intervalId = setInterval(scroll, scrollInterval);
        startIndicatorBar();
      }
    };

    const stopCarousel = () => {
      clearInterval(intervalId);
      intervalId = null;
      pauseIndicatorBar();
    };

    const scrollTo = (projectId) => {
      scroll(projectId);
      stopCarousel();
      intervalId = null;
      pauseIndicatorBar();
      startCarousel();
    };

    return { startCarousel, stopCarousel, scrollTo };
  })();

  const projectCardAnimationHandler = (() => {
    const showsCard = (card) => {
      card.classList.remove('hide');
    };

    const hidesCard = (cards) => {
      cards.forEach((item) => {
        item.classList.add('hide');
      });
    };

    return { showsCard, hidesCard };
  })();

  const projectsAnimationHandler = () => {
    const projectSection = document.getElementById('projects');

    const projectCards = document.querySelector('.projects-list');

    const cards = projectCards.querySelectorAll('.card');

    const moreButton = document.querySelector('.more-project-btn');

    if (getVisiblePercentage(projectSection) > 20) {
      projectSection.classList.add('show');
      carouselScroll.startCarousel();
    } else if (getVisiblePercentage(projectSection) < 20) {
      projectSection.classList.remove('show');
      carouselScroll.stopCarousel();
    }

    cards.forEach((card) => {
      if (getVisiblePercentage(card) > 15) {
        projectCardAnimationHandler.showsCard(card);
        moreButton.classList.add('hide');
      }
    });

    if (getVisiblePercentage(projectCards) < 20) {
      projectCardAnimationHandler.hidesCard(cards);
      moreButton.classList.remove('hide');
    }
  };

  const projectsSectionHandler = (e) => {
    const carouselIndicator = e.target.closest('.carousel-indicator');
    if (carouselIndicator) {
      carouselScroll.scrollTo(carouselIndicator.dataset.carouselId);
    } else if (e.target.closest('.more-project-btn')) {
      const projectList = document.querySelector('.projects-list');
      window.scrollTo({
        top: projectList.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  const footerAnimationHandler = () => {
    const footer = document.getElementById('footer');

    if (getVisiblePercentage(footer) >= 10) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  };

  // Scroll Event Listener
  window.addEventListener('scroll', () => {
    setIndicatorActive();
    heroEventHandler.monitorHeroScroll();
    aboutAnimationHandler.aboutScroll();
    checkBoxes();
    projectsAnimationHandler();
    footerAnimationHandler();
  });

  // Menu
  const menuHandler = (e) => {
    const menuButton = document.querySelector('#menu-btn');

    const showMenu = () => {
      menuButton.classList.add('open');
      const menuSection = menu();
      body.appendChild(menuSection);
      setTimeout(() => {
        menuSection.classList.add('show');
      }, 50);
    };

    const hideMenu = (menuSection) => {
      menuButton.classList.remove('open');
      menuSection.classList.remove('show');
      setTimeout(() => {
        menuSection.remove();
      }, 750);
    };

    const toggleMenu = () => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        hideMenu(menuSection);
      } else {
        showMenu();
      }
    };

    const scrollSections = (section) => {
      toggleMenu();
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }, 500);
    };

    const modeTogglerHandler = () => {
      document.documentElement.classList.toggle('light');
      body.classList.add('mode-transitions');

      setTimeout(() => {
        body.classList.remove('mode-transitions');
      }, 10);
    };

    if (e.target.closest('#menu-btn')) {
      toggleMenu();
    } else if (e.target.closest('.home-link')) {
      const home = document.getElementById('hero');
      scrollSections(home);
    } else if (e.target.closest('.about-link')) {
      const about = document.getElementById('about');
      scrollSections(about);
    } else if (e.target.closest('.skills-link')) {
      const skills = document.getElementById('skills');
      scrollSections(skills);
    } else if (e.target.closest('.projects-link')) {
      const projects = document.getElementById('projects');
      scrollSections(projects);
    } else if (e.target.closest('.mode-toggler-wrapper')) {
      modeTogglerHandler();
    }
  };

  const sectionHandler = (e) => {
    const indicator = e.target.closest('.indicator-wrapper .indicator');
    if (indicator) {
      e.preventDefault();
      const targetSectionID = indicator.getAttribute('href');
      const targetSection = document.querySelector(targetSectionID);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    } else if (e.target.closest('.scroll-down')) {
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
    aboutAnimationHandler.aboutClick(e);
    sectionHandler(e);
    projectsSectionHandler(e);
  });

  heroEventHandler.animateHeroSequence();
};

export default events;
