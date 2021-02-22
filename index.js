let moveImage = document.querySelector("#moveImage");
let containerSpinner = document.querySelector("#container-spinner");

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
