// Type writter Effect

const texts = [
  "  \n      Welcome to Dhaka Catering!              \n",
  "Old Dhaka's hidden catering gem",
  "Authentic Old Dhaka flavors",
  "\nThank you for choosing us!\n",
];
const speed = 115;

let i = 0;
let j = 0;
let typingText = document.getElementById("typing-text");

function type() {
  if (i < texts[j].length) {
    typingText.innerHTML += texts[j].charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, speed);
  }
}

function erase() {
  if (i > 0) {
    typingText.innerHTML = texts[j].substring(0, i - 1);
    i--;
    setTimeout(erase, speed);
  } else {
    j++;
    if (j >= texts.length) j = 0;
    setTimeout(type, speed);
  }
}

type();

// window.addEventListener("scroll", function () {
//   const header = document.querySelector("nav");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

const getStarted = () => {
  let getbtn = document.querySelector(".get");
  getbtn.classList.toggle("hover");
};
const start = () => {
  let getbtn = document.querySelector(".get");
  getbtn.classList.toggle("inhover");
};

function toggleMenu() {
  let menutoggle = document.querySelector(".menu-bar");
  let navpop = document.querySelector(".navpop");
  let typing = document.querySelector("#typing-text");
  let hrs = document.querySelector(".h");
  let get = document.querySelector(".get");
  let bg= document.querySelector(".bg");
  // menutoggle.addEventListener("click", () => {
  //   menutoggle.innerHTML = `<div class="menu-bar"><i class="uil uil-times"></i></div>`
  // });
  navpop.classList.toggle("active");
  bg.classList.toggle("active");
  typing.classList.toggle("active");
  hrs.classList.toggle("active");
  get.classList.toggle("active");
}
