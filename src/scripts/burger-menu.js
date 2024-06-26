

document.addEventListener('click', (event) => {
    if (event.target.className.includes("header__burger-btn")||event.target.className.includes("header__burger-btn__span")) {
      
      if (event.className.includes('open')) {
        event.classList.remove('open');
        console.log("close")
      } else {
        event.classList.add('open');
        console.log(event.classList)
      }
      
    }
  });

