window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 2. Smooth scroll (if you have section IDs)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 3. Download CV (simulate)
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "Sejal_Sonar_CV.pdf"; // Make sure the file exists
  link.download = "Sejal_Sonar_CV.pdf";
  link.click();
});

// 4. Image hover effect (optional animation toggle)
const imgBox = document.querySelector(".img-box");
imgBox.addEventListener("mouseenter", () => {
  imgBox.classList.add("hovered");
});
imgBox.addEventListener("mouseleave", () => {
  imgBox.classList.remove("hovered");
})
