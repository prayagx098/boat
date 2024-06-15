document.querySelector('.prev-icon').addEventListener('click', function() {
    document.querySelector('.products-container').scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.next-icon').addEventListener('click', function() {
    document.querySelector('.products-container').scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
  