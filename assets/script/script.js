document.addEventListener("DOMContentLoaded", () => {
  // Fade-in effect on scroll
  const fadeElements = document.querySelectorAll(".fade-in-up");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach((el) => fadeObserver.observe(el));

  // Typing effect for role titles
  const roles = ["Web Developer", "Full-Stack Developer", "Third-Year Student"];
  const typingText = document.getElementById("typing-text");

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typingSpeed = 100;
  const pauseBetween = 1500;

  function type() {
    const current = roles[roleIndex];
    typingText.textContent = current.slice(
      0,
      deleting ? charIndex-- : charIndex++
    );

    if (!deleting && charIndex === current.length) {
      setTimeout(() => (deleting = true), pauseBetween);
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, deleting ? typingSpeed / 2 : typingSpeed);
  }

  type();

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  let isDark = true;

  function updateTheme() {
    const icon = isDark ? "bi-sun" : "bi-moon";
    const text = isDark ? "Light" : "Dark";

    const icons = document.querySelectorAll(".theme-icon");
    icons.forEach((i) => {
      i.className = `bi ${icon} theme-icon`;
    });

    const texts = document.querySelectorAll(".theme-text, #theme-text");
    texts.forEach((t) => {
      t.textContent = text;
    });

    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
  }

  function toggleTheme() {
    isDark = !isDark;
    updateTheme();
  }

  themeToggle.addEventListener("click", toggleTheme);
  themeToggleMobile.addEventListener("click", toggleTheme);

  updateTheme();
});
