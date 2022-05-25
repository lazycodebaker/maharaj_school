
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
  document.getElementById("menuListMobile").style.left = "0";
}
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
  document.getElementById("menuListMobile").style.left = "-100%";
}

window.onscroll = () => {
  if (window.scrollY > 350) {
    document.querySelector(".topnav").classList.add("hidden");
    navbar.classList.remove("top-12");
  } else {
    document.querySelector(".topnav").classList.remove("hidden");
    navbar.classList.add("top-12");
  };
}
