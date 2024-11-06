import dvd from '../assets/easter/dvd.svg';

const createEasterEggWrapper = () => {
  const easterEggWrapper = document.createElement('div');
  easterEggWrapper.className = 'easter-egg-wrapper';

  const dvdWrapper = document.createElement('div');
  dvdWrapper.className = 'dvd';

  const dvdIcon = document.createElement('img');
  dvdIcon.src = dvd;

  dvdWrapper.appendChild(dvdIcon);

  easterEggWrapper.appendChild(dvdWrapper);

  return easterEggWrapper;
};

const createEasterEgg = () => {
  const easterEgg = document.createElement('div');
  easterEgg.className = 'easter-egg';

  easterEgg.appendChild(createEasterEggWrapper());

  return easterEgg;
};

export default createEasterEgg;
