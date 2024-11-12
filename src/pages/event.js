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
    const dateText = hero.querySelectorAll(
      '.decoration-line:nth-child(3) .letter'
    );

    const loremDecorText = hero.querySelectorAll(
      '.decoration-line:nth-child(4) .letter'
    );

    const heroText = hero.querySelector('.hero-wrapper h1 .hero-main-text');

    const wordDecorations = hero.querySelectorAll(
      '.decoration-date .date-wrapper > div'
    );

    const angleDecorationsTop = hero.querySelector(
      '.decoration-angle:last-child'
    );
    const angleDecorationsBottom = hero.querySelector('.decoration-angle');

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

      const randomFont = () => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * fontList.length);
        } while (randomIndex === currentIndex);

        currentIndex = randomIndex;

        return randomIndex;
      };

      const setFont = () => {
        const fontIndex = randomFont();
        heroText.style.fontFamily = fontList[fontIndex];
      };

      return { setFont };
    })();

    const heroAnimationHandler = () => {
      for (let i = 0; i < helloText.length; i += 1) {
        helloText[i].style.left = `${5.5 * i}rem`;
        loremText[i].style.left = `${5.5 * i}rem`;
        dogeText[i].style.left = `${5.5 * i}rem`;
        hiText[i].style.left = `${5.5 * i}rem`;
      }

      const showText = (text) => {
        text.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('show');
          }, 50 * index);
        });
      };

      const hideText = (text) => {
        text.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('hide');
          }, 50 * index);
        });
      };

      setTimeout(() => {
        hideText(helloText);
        showText(loremText);
      }, 1000);

      setTimeout(() => {
        hideText(loremText);
        showText(dogeText);
      }, 2350);

      setTimeout(() => {
        hideText(dogeText);
        showText(hiText);
      }, 2500);

      setTimeout(() => {
        for (let i = 0; i < helloText.length; i += 1) {
          hiText[i].style.left = '50%';
          hiText[i].style.transform = 'translateX(-50%)';
          textDot.style.right = '50%';
          textDot.style.transform = 'translate(50%, -50%)';
        }
      }, 4000);

      setTimeout(() => {
        for (let i = 0; i < helloText.length; i += 1) {
          hiText[i].style.animation = 'hide-hero-text .15s ease forwards';
          textDot.style.animation = 'hide-hero-text .15s ease forwards';
        }
      }, 4250);

      setTimeout(() => {
        heroContainer.classList.add('extend');
      }, 4000);

      setTimeout(() => {
        const heroMainText = document.querySelector('.hero-main-text');

        decorationLine.forEach((element) => {
          element.classList.add('show');
        });

        dateText.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('show');
          }, 75 * index);
        });

        loremDecorText.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('show');
          }, 75 * index);
        });

        wordDecorations.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('show');
          }, 75 * index);
        });

        heroMainText.style.animation =
          'hero-main-text-show 3s cubic-bezier(0.7, 0, 0.5, 0) forwards';

        angleDecorationsTop.classList.remove('hide');
        angleDecorationsBottom.classList.remove('hide');

        // Mouse Enter EventListener
        heroText.addEventListener('mouseenter', () => {
          heroFontHandler.setFont();
        });

        body.classList.remove('not-scrollable');
      }, 4500);
    };

    const heroScroll = () => {
      const heroMainText = document.querySelectorAll('.hero-main-text > div');
      if (getVisiblePercentage(hero) > 20) {
        heroContainer.classList.remove('hide');
        heroMainText.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.remove('hide');
          }, 100 * index);
        });

        decorationLine.forEach((element) => {
          element.classList.add('show');
        });

        dateText.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('show');
          }, 75 * index);
        });

        loremDecorText.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('show');
          }, 75 * index);
        });

        wordDecorations.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('show');
          }, 75 * index);
        });

        angleDecorationsTop.classList.remove('hide');
        angleDecorationsBottom.classList.remove('hide');
      } else {
        heroContainer.classList.add('hide');
        heroMainText.forEach((letter) => {
          letter.classList.add('hide');
        });

        decorationLine.forEach((element) => {
          element.classList.remove('show');
        });

        dateText.forEach((letter) => {
          letter.classList.remove('show');
        });

        loremDecorText.forEach((letter) => {
          letter.classList.remove('show');
        });

        wordDecorations.forEach((letter) => {
          letter.classList.remove('show');
        });

        angleDecorationsTop.classList.add('hide');
        angleDecorationsBottom.classList.add('hide');
      }
    };

    return {
      heroAnimationHandler,
      heroScroll,
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
    heroEventHandler.heroScroll();
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

  heroEventHandler.heroAnimationHandler();
  body.classList.add('not-scrollable');
};

export default events;
