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

  console.log("ŗabotaet?");
}
