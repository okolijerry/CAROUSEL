window.addEventListener("scroll", () => {
  document.querySelector("").classList.toggle("window-scrolled", window.scrollY > 100);
})