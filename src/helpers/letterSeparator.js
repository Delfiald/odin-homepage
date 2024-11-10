const createSeparateLetter = (word, container) => {
  word.split('').forEach((letter) => {
    const letterDiv = document.createElement('div');
    letterDiv.textContent = letter;
    letterDiv.className = 'letter';
    container.appendChild(letterDiv);
  });
};

export default createSeparateLetter;
