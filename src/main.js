document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if(hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Interactive 3D Tilt Effect
  const tiltElements = document.querySelectorAll('.3d-card, .floating-img');

  tiltElements.forEach(el => {
    // Prevent image dragging from interfering
    if(el.tagName.toLowerCase() === 'img') {
      el.setAttribute('draggable', 'false');
    }

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element.
      const y = e.clientY - rect.top;  // y position within the element.
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation based on cursor distance from center
      const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
      const rotateY = ((x - centerX) / centerX) * 15;
      
      // Apply 3D transform
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      el.style.transition = 'transform 0.1s ease-out';
    });

    el.addEventListener('mouseleave', () => {
      // Reset transform when mouse leaves
      el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
      el.style.transition = 'transform 0.5s ease-in-out';
    });
  });
});
