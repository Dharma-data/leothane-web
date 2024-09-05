const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function myFunction(x) {
  x.classList.toggle("change");
}

AOS.init({
  once: false,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    980: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".swiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 1500,
  preventClicks: true,
  loop: false,
  slidesPerView: "auto",
  autoplay: {
    delay: 9500,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});
var swiper = new Swiper(".swiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 3,
  speed: 1500,
  preventClicks: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
  },
  coverflowEffect: {
    rotate: 360,
    stretch: 650,
    depth: 800,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let rotateSetter = gsap.quickTo(".box-b", "rotation");
let clamp = gsap.utils.clamp(-360, 360);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  smoothTouch: 0.1,
  effects: true,
  onStop: () => console.log("stopped"),
  onUpdate: (self) =>
    console.log("velocity", rotateSetter(clamp(self.getVelocity()))),
});

const title = document.querySelector(".title");

title.addEventListener("click", (e) => {
  smoother.scrollTo(".box-c", true, "bottom 370px");
});
const title1 = document.querySelector(".title1");

title1.addEventListener("click", (e) => {
  smoother.scrollTo(".box-c1", true, "bottom 300px");
});

button.addEventListener("click", (e) => {
  gsap.to(smoother, {
    scrollTop: smoother.offset(".box-c", "center center"),
    duration: 2,
    ease: "back.out",
  });
});

button.addEventListener("click", (e) => {
  gsap.to(smoother, {
    scrollTop: smoother.offset(".box-c1", "center center"),
    duration: 2,
    ease: "back.out",
  });
});

// Parallax effect
smoother.effects(".img-parallax img", {
  speed: "auto",
});
