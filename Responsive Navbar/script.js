function toggleNavbar() {
  const navbar = document.querySelector(".navbar-sm");
  const svg1 = document.querySelector(".svg1");
  const svg2 = document.querySelector(".svg2");

  navbar.classList.toggle("show");
  svg1.classList.toggle("show");
  svg2.classList.toggle("show");
}
