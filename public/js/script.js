document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    
    link.addEventListener('click', event => {
      
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
