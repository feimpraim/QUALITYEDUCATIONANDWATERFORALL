/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  const square = document.querySelector('.square');
  square.classList.remove('square-transition');
  const square2 = document.querySelector('.square2');
  square.classList.remove('square-transition');
  const square3 = document.querySelector('.square3');
  square.classList.remove('square-transition');
  
  // Create the observer, same as before:
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        square.classList.add('square-transition');
        return;
      }
  
      square.classList.remove('square-transition');
    });
  });
  
  observer.observe(document.querySelector('.square-wrapper'));
  



  //typewriter