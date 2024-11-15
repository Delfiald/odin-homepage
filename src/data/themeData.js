function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === 'QuotaExceededError' &&
      storage &&
      storage.length !== 0
    );
  }
}

const themeHandler = (() => {
  const saveTheme = (theme) => {
    if (storageAvailable('localStorage')) {
      localStorage.setItem('theme', theme);
    }
  };

  const getTheme = () => {
    if (storageAvailable('localStorage')) {
      return localStorage.getItem('theme');
    }
    return null;
  };

  return { saveTheme, getTheme };
})();

export default themeHandler;
