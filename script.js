
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after selecting a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Typing animation
const typingElement = document.getElementById("typing");

const roles = [
  "Web Developer",
  "Creative Thinker",
  "Frontend Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (deleting) {
    characterIndex--;
  } else {
    characterIndex++;
  }

  typingElement.textContent =
    currentRole.substring(0, characterIndex);

  let delay = deleting ? 55 : 100;

  if (!deleting && characterIndex === currentRole.length) {
    deleting = true;
    delay = 1400;
  } else if (deleting && characterIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350;
  }

  setTimeout(typeEffect, delay);
}

// Respect reduced-motion preference
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  typingElement.textContent = "Web Developer";
} else {
  typeEffect();
}
