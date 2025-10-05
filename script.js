const fadeEls = document.querySelectorAll(".fade-in-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // ensures animation happens only once
      }
    });
  },
  { threshold: 0.2 }
);

fadeEls.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Reset animation when scrolled out of view
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach((el) => observer.observe(el));
});
