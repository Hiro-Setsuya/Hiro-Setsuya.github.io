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
});
