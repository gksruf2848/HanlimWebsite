const main = document.querySelector("#main");
const main = document.querySelector("#login");

function login() {
  main.style.animation = "fadeOut 1s";
  main.style.WebkitAnimation = "fadeOut 1s";
  setTimeout(() => {
    login.style.animation = "fadeIn 1s"
    login.style.WebkitAnimation = "fadeIn 1s"
    setTimeout(() => {
      main.style.display = "none";
      login.style.display = "block";
    }, 450)
  }, 450)
}
