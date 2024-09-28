const magnify = document.querySelector(".mag");
const SearchBox = document.querySelector(".search-box-container");
const logbutton = document.querySelector(".logbutton");

magnify.addEventListener("click", toggleElements);

function toggleElements() {
  magnify.classList.toggle("hide-icon");
  magnify.classList.toggle("active-pseudo");
  SearchBox.classList.toggle("expand");
  logbutton.classList.toggle("hide");
}

const hearticon = document.querySelectorAll(".heart");
const eyeicon = document.querySelectorAll(".eye");
const dotsicon = document.querySelectorAll(".dots");

eyeicon.forEach((icon) => {
  icon.addEventListener("click", function () {
    icon.classList.toggle("eye-active");
  });
});
dotsicon.forEach((icon) => {
  icon.addEventListener("click", function () {
    const sublist = icon.nextElementSibling;

    while (sublist && !sublist.classList.contains("movie-list")) {
      sublist = sublist.nextElementSibling;
    }

    if (sublist) {
      sublist.classList.toggle("active");
    }
  });
});

hearticon.forEach((icon) => {
  icon.addEventListener("click", function () {
    icon.classList.toggle("heart-active");
  });
});

// <!--                       MOBILE VIEW                          -->

const hamburgetmenu = document.querySelector(".hamburger-menu");
const mobilenav = document.querySelector(".nav-mobile-list");

const search = document.querySelector(".search-button");
const searchBoxMobile = document.querySelector(".mobile-search-box");

hamburgetmenu.addEventListener("click", (e) => {
  e.stopPropagation();
  if (searchBoxMobile.classList.contains("mobile-nav-menus-active")) {
    searchBoxMobile.classList.remove("mobile-nav-menus-active");
  }
  mobilenav.classList.toggle("mobile-nav-menus-active");
  hamburgetmenu.classList.toggle("icon-change");
});

search.addEventListener("click", (e) => {
  e.stopPropagation();
  if (mobilenav.classList.contains("mobile-nav-menus-active")) {
    mobilenav.classList.remove("mobile-nav-menus-active");
    hamburgetmenu.classList.remove("icon-change");
  }

  searchBoxMobile.classList.toggle("mobile-nav-menus-active");
});

document.addEventListener("click", (e) => {
  if (
    !hamburgetmenu.contains(e.target) &&
    !mobilenav.contains(e.target) &&
    !search.contains(e.target) &&
    !searchBoxMobile.contains(e.target)
  ) {
    if (mobilenav.classList.contains("mobile-nav-menus-active")) {
      mobilenav.classList.remove("mobile-nav-menus-active");
    }
    if (searchBoxMobile.classList.contains("mobile-nav-menus-active")) {
      searchBoxMobile.classList.remove("mobile-nav-menus-active");
    }
  }
});
