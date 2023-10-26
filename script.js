const nav = document.querySelector(".header .nav");
const hamburger = document.querySelector(".header .hamburger");
const close = document.querySelector(".header .menu-close");
const bookmark = document.querySelector(".mastercraft-monitor .bookmark");
const bookText = document.querySelector(".mastercraft-monitor .bookmark p");
const bookImg = document.querySelector(".mastercraft-monitor .bookmark img");
const reward = document.querySelector(".reward-popup");
const rewardBtn = document.querySelectorAll(".about-project .btn");
const closeReward = document.querySelector(".reward-popup img");
const outerCircle = document.querySelectorAll(".reward-popup .upper-circle");
const innerCircle = document.querySelectorAll(".reward-popup .inner-circle");
const inputDonation = document.querySelectorAll(
  ".reward-popup .input-donation"
);
const success = document.querySelector(".success");
const continueReward = document.querySelectorAll(
  ".reward-popup .input-donation .btn"
);
const input = document.querySelectorAll(".pledge-amount input");
const continueSuccess = document.querySelector(".success .btn");
const donated = document.querySelector(".so-far span").textContent;
const donatedGraph = document.querySelector(".color-left");

const donatedNum = Number(donated.replace(/,/g, ""));

donatedGraph.style.width = `${donatedNum / 1000}%`;
let num;

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-visible");
  hamburger.classList.toggle("hamburger-none");
});

close.addEventListener("click", () => {
  nav.classList.toggle("nav-visible");
  hamburger.classList.toggle("hamburger-none");
});

bookmark.addEventListener("click", () => {
  bookText.classList.toggle("text-book");
  bookImg.classList.toggle("img-book");
});

for (let i = 0; i < rewardBtn.length; i++) {
  if (i !== 2) {
    rewardBtn[i].addEventListener("click", () => {
      reward.classList.toggle("reward-popup-block");
    });
  }
}

closeReward.addEventListener("click", () => {
  reward.classList.toggle("reward-popup-block");
});

for (let i = 0; i < outerCircle.length; i++) {
  if (i !== 3) {
    outerCircle[i].addEventListener("click", () => {
      innerCircle[i].classList.toggle("inner-circle-block");
      inputDonation[i].classList.toggle("input-donation-block");
    });
  }
}

for (let i = 0; i < continueReward.length; i++) {
  continueReward[i].addEventListener("click", () => {
    innerCircle[i].classList.toggle("inner-circle-block");
    inputDonation[i].classList.toggle("input-donation-block");
    reward.classList.toggle("reward-popup-block");
    success.classList.toggle("success-block");
    document.querySelector(".so-far span").textContent = (
      Number(donated.replace(/,/g, "")) + Number(input[i].value)
    ).toLocaleString("en-US");
    num = Number(donated.replace(/,/g, "")) + Number(input[i].value);
    document.querySelector(".color-left").style.width = `${num / 1000}%`;
  });
}

continueSuccess.addEventListener("click", () => {
  success.classList.toggle("success-block");
});
