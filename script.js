/* changer style button features on click */

const buttons = document.querySelectorAll(".features--choice--button");
console.log(buttons);

buttons.forEach(button => {
  button.addEventListener("click", event => {
    buttons.forEach(b => b.classList.remove("features--selected--button"));
    event.target.classList.add("features--selected--button");
  });
});

const featureImage = document.getElementById("features--image");
const featureTitle = document.getElementById("features--text--title");
const featureText = document.getElementById("features--text--text");
function bookmark() {
  featureImage.innerHTML =
    '<img src="./images/illustration-features-tab-1.svg" alt="" />';
  featureTitle.innerHTML = "Bookmark in one click";
  featureText.innerHTML =
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites";
}
function searching() {
  featureImage.innerHTML =
    '<img src="./images/illustration-features-tab-2.svg" alt="" />';
  featureTitle.innerHTML = "Intelligent search";
  featureText.innerHTML =
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
}
function sharing() {
  featureImage.innerHTML =
    '<img src="./images/illustration-features-tab-3.svg" alt="" />';
  featureTitle.innerHTML = "Share your bookmarks";
  featureText.innerHTML =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
}
/* ---------------------------------------------------------------------BOUTON QUESTION--- */

const button = document.querySelectorAll(".accordion--button");

/* ouvre et ferme le paragraphe */

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* faire pivoter la fleche */

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    const arrow = this.querySelector(".question--button--arrow");
    arrow.classList.toggle("image-reverse");
  });
}

function hamburger() {
  const hamburger = document.getElementsByClassName("hamburger--display")[0];
  const hide = document.getElementsByClassName("nav--logo")[0];
  hamburger.style.display = "block";
  hide.style.display = "none";
}
function hamburgerClose() {
  const hamburger = document.getElementsByClassName("hamburger--display")[0];
  const hide = document.getElementsByClassName("nav--logo")[0];
  hamburger.style.display = "none";
  hide.style.display = "flex";
}

function checkMail() {
  let myMailInput = document.getElementById("email");
  let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const message = document.getElementById("message--error");
  const boxRouge = document.getElementById("input--mail");

  if (myMailInput.value.trim() == "") {
    message.classList.add("error--text--active");
    boxRouge.classList.add("input--container--error");
  } else if (myMailRegex.test(myMailInput.value) == false) {
    message.classList.add("error--text--active");
    boxRouge.classList.add("input--container--error");
  } else {
    message.classList.remove("error--text--active");
    boxRouge.classList.remove("input--container--error");
  }
}
