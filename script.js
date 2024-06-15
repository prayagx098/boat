// document.querySelector('.prev-icon').addEventListener('click', function() {
//     document.querySelector('.products-container').scrollBy({
//       left: -300,
//       behavior: 'smooth'
//     });
//   });
  
//   document.querySelector('.next-icon').addEventListener('click', function() {
//     document.querySelector('.products-container').scrollBy({
//       left: 300,
//       behavior: 'smooth'
//     });
//   });

  document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          console.log('hello');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
  
    boxes.forEach(box => {
      observer.observe(box);
    });
  });
  