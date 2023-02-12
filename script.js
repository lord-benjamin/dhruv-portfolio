/******************************* home section *******************************/

var typed = new Typed(".auto-type", {
  strings: [
    "a Web Developer!",
    "a Curious Learner!",
    "an Aspiring Software Engineer!",
    "a Competitive Programmer!",
    "a Tech Enthusiast!",
    "an Open Source Contributor!",
  ],
  typeSpeed: 90,
  backSpeed: 40,
  loop: true,
  loopCount: Infinity,
  cursorChar: "_",
  smartBackspace: true,
});
const scrollUpBtn = document.querySelector(".scroll-up-btn");
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behaviour: "smooth" });
});
const navBar = document.querySelector("nav");
window.onscroll = () => {
  if (window.scrollY >= window.innerHeight) {
    navBar.classList.add("nav-dark");
    scrollUpBtn.classList.add("show-scroll-up-btn");
  } else {
    navBar.classList.remove("nav-dark");
    scrollUpBtn.classList.remove("show-scroll-up-btn");
  }
};
const navTitles = document.querySelectorAll(".nav-title");
const navSections = document.querySelectorAll(".section");
const tabName = document.querySelector("title");
function navActiveness() {
  let index = navSections.length;
  while (
    --index &&
    window.scrollY + window.innerHeight / 2 < navSections[index].offsetTop
  ) {}
  navTitles.forEach((title) => {
    title.classList.remove("active-title");
    title.classList.add("inactive-title");
  });
  navTitles[index].classList.remove("inactive-title");
  navTitles[index].classList.add("active-title");
  if (navTitles[index].innerHTML === "Home") {
    tabName.innerHTML = "Dhruv Arora";
  } else {
    tabName.innerHTML = `${navTitles[index].innerHTML}`;
  }
}
navActiveness();
window.addEventListener("scroll", navActiveness);

/******************************* resume section *******************************/

const resumeCard = document.getElementById("resume-box");
const resumeDiv = document.querySelector("#resume-box div");
const resumeIcon = document.querySelector("#resume-box div i");
const resumeH1 = document.querySelector("#resume-box div h1");
const resumeH2 = document.querySelector("#resume-box div h2");
resumeCard.addEventListener("mouseover", () => {
  // resumeCard.style.margin = "20px auto 40px";
  // resumeCard.style.boxShadow = "inset 1px 1px 20px #ff9a3d";
  resumeCard.style.backgroundColor = "#ffffff30";
  resumeCard.style.border = "2px solid white";
  resumeCard.style.boxShadow = "1px 1px 20px white";
  resumeIcon.style.color = "white";
  resumeH1.style.color = "white";
  resumeH2.style.color = "white";
});
resumeCard.addEventListener("mouseleave", () => {
  // resumeCard.style.margin = "30px auto 30px";
  // resumeCard.style.boxShadow = "1px 1px 20px #ff9a3d";
  resumeCard.style.backgroundColor = "#ff9a3d30";
  resumeCard.style.border = "2px solid #ff9a3d";
  resumeCard.style.boxShadow = "1px 1px 20px #ff9a3d";
  resumeIcon.style.color = "#FF9A3D";
  resumeH1.style.color = "#FF9A3D";
  resumeH2.style.color = "#FF9A3D";
});

/******************************* project section *******************************/

const projCard = document.querySelectorAll(".proj");
const image = document.querySelectorAll(".proj img");
const imgContent = document.querySelectorAll(".content");
for (let i = 0; i < image.length; i++) {
  projCard[i].addEventListener("mouseover", () => {
    image[i].style.filter = "blur(10px)";
    // projCard[i].style.margin = "40px 20px 20px 20px";
    image[i].style.transform = "scale(1.08)";
    imgContent[i].style.display = "block";
  });
  projCard[i].addEventListener("mouseleave", () => {
    image[i].style.filter = "blur(0)";
    // projCard[i].style.margin = "30px 20px";
    image[i].style.transform = "scale(1)";
    imgContent[i].style.display = "none";
  });
}

/******************************* skill section *******************************/

const skillTitles = document.querySelectorAll(".skl-title");
const skillsArea = document.querySelectorAll(".skills");
for (let i = 0; i < skillTitles.length; i++) {
  skillTitles[i].addEventListener("click", () => {
    for (let j = 0; j < skillTitles.length; j++) {
      skillTitles[j].classList.add("inactive-title");
      skillTitles[j].classList.remove("active-title");
      skillsArea[j].classList.add("inactive-tab");
      skillsArea[j].classList.remove("active-tab");
    }
    skillTitles[i].classList.remove("inactive-title");
    skillTitles[i].classList.add("active-title");
    skillsArea[i].classList.remove("inactive-tab");
    skillsArea[i].classList.add("active-tab");
  });
}

/******************************* achievement section *******************************/

var swiper = new Swiper(".all-achievements", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/******************************* contact section *******************************/

const subBtn = document.querySelector(".contact-left form button");
const clearBtn = document.querySelector(".clear");
subBtn.addEventListener("mouseover", () => {
  subBtn.style.backgroundColor = "transparent";
  subBtn.style.color = "#ff9a3d";
});
function hoverEffectOnLeaving() {
  subBtn.style.backgroundColor = "#ff9a3d";
  subBtn.style.color = "#050908";
}
subBtn.addEventListener("mouseleave", hoverEffectOnLeaving);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzooNGeErOyN_dflHvmywSU-HWOYUZJ6yiBsiEbFZR-SCIWAHXkVVbhEB1yfJw3Dczg/exec";
const form = document.forms["submit-to-google-sheet"];
const submitMsg = document.getElementById("submit-msg");

clearBtn.addEventListener("click", () => {
  form.reset();
});

form.addEventListener("submit", (e) => {
  subBtn.style.backgroundColor = "transparent";
  subBtn.classList.add("button-loading");
  subBtn.style.cursor = "auto";
  subBtn.removeEventListener("mouseleave", hoverEffectOnLeaving);
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      subBtn.style.backgroundColor = "#ff9a3d";
      subBtn.style.color = "#050908";
      subBtn.classList.remove("button-loading");
      subBtn.style.cursor = "pointer";
      subBtn.addEventListener("mouseleave", hoverEffectOnLeaving);
      submitMsg.innerHTML = "Message sent successfully!";
      submitMsg.style.display = "block";
      setTimeout(() => {
        submitMsg.innerHTML = "";
        submitMsg.style.display = "none";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      subBtn.style.backgroundColor = "#ff9a3d";
      subBtn.style.color = "#050908";
      subBtn.classList.remove("button-loading");
      subBtn.style.cursor = "pointer";
      subBtn.addEventListener("mouseleave", hoverEffectOnLeaving);
      submitMsg.innerHTML = "Could not send message! Something went wrong!";
      submitMsg.style.display = "block";
      setTimeout(() => {
        submitMsg.innerHTML = "";
        submitMsg.style.display = "none";
      }, 5000);
    });
});
