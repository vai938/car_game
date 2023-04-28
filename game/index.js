const fullSc = document.querySelector(".full-screen");
const heading = document.querySelector(".heading");
const headTitle = document.querySelector(".head-title");
const background = document.querySelector(".background");
const controller = document.querySelector(".controller");
const userCar = document.querySelector("#userCar");
const startGm = document.querySelector("#start-gm");
const carClr = document.querySelector("#car-color");
const changeClr = document.querySelector("#change-clr");
const arr = ["blue", "green", "yellow"];
userCar.style.display = "none";

const getFullScElement = function () {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement
  );
};
const normalScreen = function () {
  document.exitFullscreen();
  fullSc.classList.replace("full-screen-new", "full-screen");
  headTitle.innerHTML = "Click the Full Screen to play the game";
  userCar.style.display = "none";
  heading.classList.replace("heading-new", "heading");
  headTitle.classList.replace("head-title-new", "head-title");
  background.classList.replace("background-new", "background");
  controller.classList.replace("controller-new", "controller");
};
const fullScreen = function () {
  userCar.style.display = "inline-block";
  document.documentElement.requestFullscreen();
  fullSc.classList.replace("full-screen", "full-screen-new");
  headTitle.innerHTML = "Welcome to Car racing game";
  heading.classList.replace("heading", "heading-new");
  headTitle.classList.replace("head-title", "head-title-new");
  background.classList.replace("background", "background-new");
  controller.classList.replace("controller", "controller-new");
};
const toggleFullsc = function () {
  if (getFullScElement()) normalScreen();
  else fullScreen();
};
fullSc.addEventListener("click", function () {
  toggleFullsc();
});
let check = false;
startGm.addEventListener("click", function () {
  if (!check) {
    document.querySelector(".background-new").style.animation =
      "run 3s linear infinite";
    startGm.textContent = "Stop";

    check = true;
  } else {
    document.querySelector(".background-new").style.animation = "none";
    startGm.textContent = "Start";
    check = false;
  }
});

let i = 0;
changeClr.addEventListener("click", function () {
  carClr.style.fill = arr[i];
  i++;
});
