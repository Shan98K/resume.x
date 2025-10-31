window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("resumeData") || "{}");

  if (!data) return;

  document.querySelectorAll("[data-field]").forEach(el => {
    const key = el.getAttribute("data-field");
    if (data[key]) el.textContent = data[key];
  });

  if (data.image) {
    const img = document.getElementById("profileImage");
    if (img) img.src = data.image;
  }
});
