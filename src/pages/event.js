const events = () => {
  const body = document.querySelector('body');

  const skillAnimationHandler = () => {
    const skills = document.querySelectorAll('.skill:has(img)');

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
      console.log(target)
    }
  })
}

export default events