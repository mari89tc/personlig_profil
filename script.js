window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  const localTheme = localStorage.getItem("theme");
  bodyElement.dataset.theme = localTheme || "light";
}

let bodyElement = document.querySelector("body");
const selectTheme = document.querySelector(".color_switch");
selectTheme.addEventListener("click", themeSwitch);

function themeSwitch() {
  console.log("skift tema");
  const currentTheme = bodyElement.dataset.theme;
  if (currentTheme === "light") {
    bodyElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    bodyElement.dataset.theme = "light";
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
