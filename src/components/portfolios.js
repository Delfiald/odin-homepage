const createPortSection = () => {
  const portSection = document.createElement('section')
  portSection.id = 'portfolios'

  const portHeader = document.createElement('h1')
  portHeader.textContent = 'Projects'

  portSection.appendChild(portHeader)

  return portSection
}

export default createPortSection