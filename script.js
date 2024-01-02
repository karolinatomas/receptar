const links = document.getElementById("myLinks");

function hamburgerMenu() {
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
}
