const createFooter = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';

  const githubButtonWrapper = document.createElement('div');
  const githubButton = document.createElement('a');
  githubButton.href = 'https://github.com/Delfiald';
  githubButton.target = '_blank';
  githubButton.rel = 'noopener noreferrer';
  githubButton.className = 'github-button';
  const githubButtonText = document.createElement('div');
  githubButtonText.textContent = 'MORE ON GITHUB';
  const githubIcon = document.createElement('i');
  githubIcon.className = 'fab fa-github';

  githubButton.appendChild(githubIcon);
  githubButton.appendChild(githubButtonText);
  githubButtonWrapper.appendChild(githubButton);

  const emailButtonWrapper = document.createElement('div');
  const emailButton = document.createElement('a');
  emailButton.href = 'mailto:aldigunawan1808@gmail.com?subject=Hello';
  emailButton.className = 'email-button';
  const emailButtonText = document.createElement('div');
  emailButtonText.textContent = 'HIRE ME ';
  const emailIcon = document.createElement('i');
  emailIcon.className = 'fas fa-envelope';

  emailButton.appendChild(emailIcon);
  emailButton.appendChild(emailButtonText);
  emailButtonWrapper.appendChild(emailButton);

  const footerContent = document.createElement('div');
  footerContent.className = 'footer-text';
  const footerText = document.createElement('div');
  footerText.textContent = '© 2024 MAG';

  footerContent.appendChild(footerText);

  footer.appendChild(footerContent);
  footer.appendChild(githubButtonWrapper);
  footer.appendChild(emailButtonWrapper);

  return footer;
};

export default createFooter;
