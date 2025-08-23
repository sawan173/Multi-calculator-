// Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Card Animations on Scroll
const cards = document.querySelectorAll(".card, .coming-soon, .hero");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Button clicked: " + btn.innerText);
    });
  });
});
