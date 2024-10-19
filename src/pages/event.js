const events = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    const {target} = e;

    if(target.closest('.skill:has(i)')){
      console.log(target)
    }
  })
}

export default events