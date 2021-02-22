// -- VARIABLES --

let moveImage = document.querySelector("#moveImage");
let containerSpinner = document.querySelector("#container-spinner");

// -- EVENTS --

document.addEventListener("scroll", () => {
  isTypeTime("2");
  isTypeTime("3");
  isTypeTime("4");
  isTypeTime("5");
});

// -- FUNCTIONS --

/* *************** SPINNER LOADING *************** */
window.onload = () => {
  containerSpinner.style.visibility = "hidden";
  containerSpinner.style.opacity = "0";
};

/* *************** ENTER RIGHT TO LEFT GIFT *************** */
moveImage.style.visibility = "hidden";
setTimeout(() => {
  moveImage.style.visibility = "visible";
  moveImage.classList.add("move-right-to-left");
}, 2000);

/* *************** SCROLL SECTION SERVICES *************** */

const isTypeTime = (number) => {
  let moveScroll = document.querySelectorAll(`.cards-${number}`);

  for (let i = 0; i < moveScroll.length; i++) {
    const moveScrollI = moveScroll[i];

    let calcDistanceTop = moveScrollI.getBoundingClientRect().top;
    let calcScreenHeight = window.innerHeight / 1.5;

    moveScrollI.classList.add(`time-${number}`);

    if (calcDistanceTop <= calcScreenHeight) {
      moveScrollI.classList.add(`move-left-to-right`);
    } else {
      moveScrollI.classList.remove(`move-left-to-right}`);
    }
  }
};
