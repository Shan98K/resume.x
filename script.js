document.getElementById("phone").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // only digits allowed
});









// ================= PROFILE PICTURE UPLOAD =================
const uploadPic = document.getElementById("uploadPic");
const previewImg = document.getElementById("previewImg");

uploadPic.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});


// ================= STEP NAVIGATION =================
const steps = document.querySelectorAll(".step-bar li");
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index) {
  steps.forEach((s) => s.classList.remove("active"));
  pages.forEach((p) => p.classList.remove("active"));
  steps[index].classList.add("active");
  pages[index].classList.add("active");
  currentPage = index;
}

steps.forEach((step) =>
  step.addEventListener("click", () => showPage(parseInt(step.dataset.page)))
);

// ================= NEXT & BACK BUTTONS =================
document.querySelectorAll(".nextBtn").forEach((btn) =>
  btn.addEventListener("click", () => {
    const currentPageElement = pages[currentPage];
    const inputs = currentPageElement.querySelectorAll("input, textarea");
    let allFilled = true;

    inputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        input.style.border = "2px solid #ff4d4d";
        allFilled = false;
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (!allFilled) {
      showWarning("⚠️ Please fill in all required fields before proceeding.");
      return;
    }

    if (currentPage < pages.length - 1) {
      showPage(currentPage + 1);
    }
  })
);

document.querySelectorAll(".backBtn").forEach((btn) =>
  btn.addEventListener("click", () => {
    if (currentPage > 0) showPage(currentPage - 1);
  })
);

// ================= WARNING POPUP =================
function showWarning(msg) {
  const alertBox = document.createElement("div");
  alertBox.textContent = msg;
  Object.assign(alertBox.style, {
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#ff4d4d",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "500",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: "9999",
    transition: "opacity 0.3s ease",
  });

  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.style.opacity = "0";
    setTimeout(() => alertBox.remove(), 400);
  }, 2500);
}



// ================= Container Loading =================

window.addEventListener("load", () => {
  const container = document.querySelector(".container");

  if (container) {
    container.style.opacity = "0";
    container.style.transform = "translateY(30px)";

    setTimeout(() => {
      container.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    }, 300); // delay in ms (0.3s)
  }
});


// PDF Download using html2pdf
// document.getElementById("downloadBtn").addEventListener("click", () => {
//   const element = document.getElementById("resume-content");
//   const opt = {
//     margin: 0.5,
//     filename: "My_Resume.pdf",
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
//   };
//   html2pdf().set(opt).from(element).save();
// });



