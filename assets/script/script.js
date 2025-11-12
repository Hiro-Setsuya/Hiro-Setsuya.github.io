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
  const typingText = document.getElementById("typing-text");

  if (typingText) {
    const roles = [
      "Web Developer",
      "Full-Stack Developer",
      "Third-Year Student",
    ];
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
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  // Get saved theme or default to dark
  let isDark = localStorage.getItem("theme") !== "light";

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

    if (isDark) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }

    // Update logo icons
    const logoImages = document.querySelectorAll('img[src*="AV_icon"]');
    logoImages.forEach((img) => {
      const currentSrc = img.getAttribute("src");
      const iconFileName = isDark ? "AV_iconD.png" : "AV_iconL.png";

      // Replace only the filename
      if (currentSrc.includes("../assets/icon/")) {
        // For pages
        img.src = `../assets/icon/${iconFileName}`;
      } else if (currentSrc.includes("assets/icon/")) {
        // For index.html
        img.src = `assets/icon/${iconFileName}`;
      }
    });

    // Save theme preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  function toggleTheme() {
    isDark = !isDark;
    updateTheme();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme);
  }

  // Initialize theme on page load
  updateTheme();
});
