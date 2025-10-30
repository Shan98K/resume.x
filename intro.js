const intro = document.querySelector(".intro");
const main = document.querySelector(".container");
if (intro && main) {
  intro.addEventListener("click", () => {
    intro.classList.add("hidden");
    document.body.style.overflow = "auto";
    setTimeout(() => main.classList.add("show"), 125);
  });
}