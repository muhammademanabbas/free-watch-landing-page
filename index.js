const top__free__watch__colors = document.querySelectorAll(".img-cont img");
const landing__page__img__colors = document.querySelectorAll(
  ".landing-watch-colors div"
);
const check__out___left__images = document.querySelectorAll(
  ".check-l-box .color-variations div"
);
const check__out___right__images = document.querySelectorAll(
  ".check-r-box .color-variations div"
);
const check__out___left__half__cut__img = document.querySelectorAll(
  ".check-l-box .check-out-img-cont .rotate-cut-img"
);
const check__out___right__half__cut__img = document.querySelectorAll(
  ".check-r-box .check-out-img-cont .rotate-cut-img"
);

console.log(check__out___right__images)

landing__page__img__colors.forEach((color, index) => {
  let lrg__img__to__be__display = index % 5;
  color.addEventListener("click", () => {
    let all__large_view__images =
      color.parentElement.parentElement.childNodes[1].children;
    for (let i = 0; i < all__large_view__images.length; i++) {
      all__large_view__images[i].classList.remove("active-landing-page-img");
    }
    all__large_view__images[lrg__img__to__be__display].classList.add(
      "active-landing-page-img"
    );
  });
});
top__free__watch__colors.forEach((image, index) => {
  let lrg__img__to__be__display = index % 4;
  image.addEventListener("click", () => {
    let all__large_view__images =
      image.parentElement.parentElement.parentElement.childNodes[1].children;
    for (let i = 0; i < all__large_view__images.length; i++) {
      all__large_view__images[i].classList.remove("active-top-free-img");
    }
    all__large_view__images[lrg__img__to__be__display].classList.add(
      "active-top-free-img"
    );
  });
});
check__out___left__images.forEach((image, index) => {
  image.addEventListener("click", () => {
    for (let i = 0; i < check__out___left__images.length; i++) {
      check__out___left__images[i].style.border = "2px solid gray";
    }
    for (let i = 0; i < check__out___left__half__cut__img.length; i++) {
      check__out___left__half__cut__img[i].classList.remove("active-cut-img");
    }
    check__out___left__half__cut__img[index].classList.add("active-cut-img");
    check__out___left__images[index].style.border = "3px solid black";
  });
});
check__out___right__images.forEach((image, index) => {
  let rotate__img__to__be__display = index % 5;
  image.addEventListener("click", () => {
    for (let i = 0; i < check__out___left__images.length; i++) {
      check__out___right__images[i].style.border = "2px solid gray";
    }
    for (let i = 0; i < check__out___right__half__cut__img.length; i++) {
      check__out___right__half__cut__img[i].classList.remove("active-cut-img");
    }
    check__out___right__half__cut__img[
      rotate__img__to__be__display
    ].classList.add("active-cut-img");
    check__out___right__images[index].style.border = "3px solid black";
  });
});

const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const followusswiper = new Swiper(".follow-us-slider-wrap", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
