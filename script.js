document.addEventListener("DOMContentLoaded", () => {
  const viewWorkBtn = document.getElementById("viewWorkBtn");
  const intro = document.getElementById("intro");
  const projects = document.getElementById("projects");
  const cards = document.querySelectorAll(".project-card");
  const backBtn = document.getElementById("backBtn");
  const nextToAbout = document.getElementById("nextToAbout");
  const aboutMe = document.getElementById("aboutMe");
  const backFromAbout = document.getElementById("backFromAbout");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  function animateProjects() {
    cards.forEach(card => card.classList.remove("show"));
    nextToAbout.classList.remove("show");
    cards.forEach((card, index) => {
      setTimeout(() => card.classList.add("show"), index * 200);
    });
    setTimeout(() => { nextToAbout.classList.add("show"); }, cards.length * 200 + 200);
  }

  viewWorkBtn.addEventListener("click", () => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
      projects.classList.remove("hidden");
      animateProjects();
    }, 600);
  });

  backBtn.addEventListener("click", () => {
    projects.classList.add("hidden");
    intro.style.display = "flex";
    setTimeout(() => {
      intro.style.opacity = "1";
      cards.forEach(card => card.classList.remove("show"));
      nextToAbout.classList.remove("show");
    }, 100);
  });

  nextToAbout.addEventListener("click", () => {
    projects.style.opacity = "0";
    setTimeout(() => {
      projects.classList.add("hidden");
      projects.style.opacity = "1"; // reset
      aboutMe.classList.remove("hidden");
      setTimeout(() => aboutMe.classList.add("show"), 50);
    }, 500);
  });

  backFromAbout.addEventListener("click", () => {
    aboutMe.classList.add("hidden");
    aboutMe.classList.remove("show");

    projects.classList.remove("hidden");
    animateProjects(); 
  });

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");
    themeToggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
  });
});

