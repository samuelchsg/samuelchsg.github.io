document.addEventListener("DOMContentLoaded", function () {
  const skillSection = document.getElementById("skills");
  const skillLevels = document.querySelectorAll(".skill-level");

  function fillSkills() {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.85) {
      skillLevels.forEach((bar, i) => {
        const level = bar.getAttribute("data-level");
        setTimeout(() => {
          bar.style.width = level;
        }, i * 150); // stagger effect
      });

      window.removeEventListener("scroll", fillSkills);
    }
  }

  window.addEventListener("scroll", fillSkills);
  fillSkills(); // in case section is already visible
});
