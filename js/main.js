document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const skillBars = document.querySelectorAll(".skill-level");
  let animated = false;

  function animateSkills() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!animated && sectionTop < windowHeight * 0.85) {
      skillBars.forEach((bar, index) => {
        const level = bar.getAttribute("data-level");
        setTimeout(() => {
          bar.style.width = level;
        }, index * 120);
      });
      animated = true;
    }
  }

  window.addEventListener("scroll", animateSkills);
  animateSkills();
});
