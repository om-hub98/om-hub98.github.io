// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.3 }
);
sections.forEach((section) => observer.observe(section));

// Animate skill cards
const skillCards = document.querySelectorAll('.skill-card');
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
skillCards.forEach(card => skillsObserver.observe(card));
