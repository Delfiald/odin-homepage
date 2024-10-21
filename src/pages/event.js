const events = () => {
  const body = document.querySelector('body');

  const skillAnimationHandler = () => {
    const skillsHeader = document.querySelector('.skills-header')
    const skills = document.querySelectorAll('.skill:has(img)');

    skillsHeader.style.animation = 'fade-in 1s ease-in-out forwards'

    skills.forEach((skill, index) => {
      setTimeout(() => {
        skill.classList.add('active')
      }, 100 * index)
    })

  }
  
  skillAnimationHandler()

  body.addEventListener('click', (e) => {
    const {target} = e;

    if(target.closest('.skill:has(img)')){
      const skill = target.closest('.skill')
      console.log(skill)
    }
  })
}

export default events