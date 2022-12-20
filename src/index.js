const menuBtn = document.getElementsByClassName("fa-bars")[0];

function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

}

menuBtn.addEventListener("click", toggleNav);
