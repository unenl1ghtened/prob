// скрипт для дропдаун меню
const dropdowns = document.querySelectorAll(".header__top-dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownBtn = dropdown.querySelector(".header__top-dropdown-btn");
  const dropdownContent = dropdown.querySelector(
    ".header__top-dropdown-content"
  );
  const arrow = dropdown.querySelector(".arrow-svg");

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown
          .querySelector(".header__top-dropdown-content")
          ?.classList.remove("show");
        otherDropdown.querySelector(".arrow-svg")?.classList.remove("rotate");
      }
    });

    dropdownContent.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".header__top-dropdown")) {
    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.querySelector(
        ".header__top-dropdown-content"
      );
      const arrow = dropdown.querySelector(".arrow-svg");
      dropdownContent.classList.remove("show");
      arrow.classList.remove("rotate");
    });
  }
});

// скрипт для бургер меню
if (window.innerWidth <= 768) {
  const burgerMenuToggler = document.querySelector(".burger-menu");
  const body = document.body;
  const overlay = document.querySelector(".header__overlay");

  burgerMenuToggler.addEventListener("click", () => {
    const isOpened = body.classList.contains("burger-opened");
    if (isOpened) {
      body.classList.remove("burger-opened");
    } else {
      body.classList.add("burger-opened");
    }
    burgerMenuToggler.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    burgerMenuToggler.classList.remove("active");
    body.classList.remove("burger-opened");
  });
}

// скрипт для features слайдера
new Swiper(".features__slider", {
  loop: true,
  autoplay: true,
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1.1,
  navigation: {
    nextEl: ".features__slider-button--next",
    prevEl: ".features__slider-button--prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 43,
      loop: true,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 33,
      loop: true,
    },
  },
});

// скрипт для products слайдера
new Swiper(".products__slider", {
  loop: true,
  autoplay: true,
  speed: 400,
  spaceBetween: 27,
  slidesPerView: 1.1,
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 37,
      loop: true,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 27,
      loop: true,
    },
  },
});

// скрипт для modal слайдера
new Swiper(".product__modal-slider", {
  loop: true,
  // autoplay: true,
  // speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: ".product__modal-slider-button--next",
    prevEl: ".product__modal-slider-button--prev",
  },
  pagination: {
    el: ".product__modal-slider-pagination",
    clickable: true,
  },
});

// скрипт для переключения размеров
document.querySelectorAll(".product__modal-sizes-item a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document
      .querySelectorAll(".product__modal-sizes-item")
      .forEach((item) => item.classList.remove("active"));

    link.closest(".product__modal-sizes-item").classList.add("active");
  });
});

// скрипт для изменения количества
const quantityContainer = document.querySelector(
  ".product__modal-quantity-counter"
);
const valueElement = quantityContainer.querySelector(".quantity-value");
const minusBtn = quantityContainer.querySelector(".quantity-decrease");
const plusBtn = quantityContainer.querySelector(".quantity-increase");

let count = 1;

minusBtn.addEventListener("click", () => {
  if (count > 1) {
    count--;
    valueElement.textContent = count;
  }
});

plusBtn.addEventListener("click", () => {
  count++;
  valueElement.textContent = count;
});

// скрипт для модальных окон
document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-modal-target]");

  openButtons.forEach((button) => {
    const modalId = button.getAttribute("data-modal-target");
    const modal =
      document.getElementById(modalId) || document.querySelector(`.${modalId}`);

    if (!modal) return;

    const overlay = modal.querySelector(
      ".product__modal-overlay, .contact__modal-overlay"
    );
    const closeBtn = modal.querySelector(
      ".product__modal-close, .contact__modal-close"
    );

    const openModal = () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    };

    button.addEventListener("click", openModal);
    overlay?.addEventListener("click", closeModal);
    closeBtn?.addEventListener("click", closeModal);
  });
});
