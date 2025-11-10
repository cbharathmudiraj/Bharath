// Scroll-triggered bounce animation for Experience section
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  document.querySelectorAll(".experience-item").forEach(item => {
    observer.observe(item);
  });
});
