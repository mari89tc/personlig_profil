window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  const localTheme = localStorage.getItem("theme");
  bodyElement.dataset.theme = localTheme || "light";
  darkSwitch.style.display = "block";
  lightSwitch.style.display = "none";
}

let bodyElement = document.querySelector("body");
const selectTheme = document.querySelector(".color_switch");
let darkSwitch = document.querySelector(".color_dark");
let lightSwitch = document.querySelector(".color_light");
selectTheme.addEventListener("click", themeSwitch);

function themeSwitch() {
  console.log("skift tema");
  const currentTheme = bodyElement.dataset.theme;
  if (currentTheme === "light") {
    bodyElement.dataset.theme = "dark";
    darkSwitch.style.display = "none";
    lightSwitch.style.display = "block";
    localStorage.setItem("theme", "dark");
  } else if (currentTheme === "dark") {
    bodyElement.dataset.theme = "light";
    darkSwitch.style.display = "block";
    lightSwitch.style.display = "none";
    localStorage.setItem("theme", "light");
  }
}
const root = document.documentElement;

function updateCursor(e) {
  x = e.clientX / window.innerWidth;
  y = e.clientY / window.innerHeight;
  document.documentElement.style.setProperty("--x", x.toFixed(5));
  document.documentElement.style.setProperty("--y", y.toFixed(5));
}
document.body.addEventListener("pointermove", updateCursor);

gsap.registerPlugin(ScrollTrigger);
gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const ps = section.querySelectorAll(".section1 p");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 20%", // Animationen sættes igang, når toppen a section-elementet rammer 50% ind i viewporten
          end: "+=300px", // Animationen er slut, når man har scrollet 200px ned
          scrub: true, // Animationen bindes op på scrollbaren
          markers: true,
        },
      })
      .from(ps, {
        opacity: 0,
        y: 20,
        stagger: 0.5,
      });
  });
});
