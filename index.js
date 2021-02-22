// -- VARIABLES --

let moveImage = document.querySelector("#moveImage");
let containerSpinner = document.querySelector("#container-spinner");
let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let open = document.querySelector(".open");
let close = document.querySelector(".close");

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
const isTypeTime = (second) => {
  let moveScroll = document.querySelectorAll(`.cards-${second}`);

  for (let i = 0; i < moveScroll.length; i++) {
    const moveScrollIndex = moveScroll[i];
    let calcDistanceTop = moveScrollIndex.getBoundingClientRect().top;
    let calcScreenHeight = window.innerHeight / 1.5;

    moveScrollIndex.classList.add(`time-${second}`);
    if (calcDistanceTop <= calcScreenHeight) {
      moveScrollIndex.classList.add(`move-left-to-right`);
    } else {
      moveScrollIndex.classList.remove(`move-left-to-right}`);
    }
  }
};

/* *************** MODAL SECTION BETWEEN SECTION SERVICES AND PHONE *************** */
const isOpenModal = (e) => {
  e.preventDefault();

  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-closed");
};

const isCloseModal = () => {
  modal.classList.toggle("modal-close");
  setTimeout(() => {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  }, 1000);
};

const isCloseModalTarget = (e) => {
  if (e.target == modalContainer) {
    modal.classList.toggle("modal-closed");

    setTimeout(() => {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 1000);
  }
};

// -- EVENTS --

document.addEventListener("scroll", () => {
  isTypeTime("2");
  isTypeTime("3");
  isTypeTime("4");
  isTypeTime("5");
});

open.addEventListener("click", isOpenModal);
close.addEventListener("click", isCloseModal);
document.addEventListener("click", isCloseModalTarget);
