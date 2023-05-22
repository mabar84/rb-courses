function allFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//

function menuFunction() {
  document.getElementById("menuBox").classList.toggle("active");
  document.getElementById("hamburgerMenu").classList.toggle("active");
}

window.onclick = function (event) {
  if (!event.target.matches(".hamburger-menu")) {
    let dropdowns = document.getElementsByClassName("menu");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  }
};

function listFunction() {
  document.getElementById("dropdownContentL").classList.toggle("active-menu");
  document.getElementById("dropdownContentR").classList.toggle("active-menu");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-content__btn")) {
    let dropdownsL = document.getElementsByClassName("dropdown-content__left");
    let dropdownsR = document.getElementsByClassName("dropdown-content__right");

    for (let i = 0; i < dropdownsL.length; i++) {
      let openDropdown = dropdownsL[i];
      if (openDropdown.classList.contains("active-menu")) {
        openDropdown.classList.remove("active-menu");
      }
    }

    for (let i = 0; i < dropdownsR.length; i++) {
      let openDropdown = dropdownsR[i];
      if (openDropdown.classList.contains("active-menu")) {
        openDropdown.classList.remove("active-menu");
      }
    }
  }
};

function backDropdownContent() {
  let dropdownsR = document.getElementsByClassName("dropdown-content__right");
  document.getElementById("dropdownContentL").classList.toggle("active-menu");
  for (let i = 0; i < dropdownsR.length; i++) {
    let openDropdown = dropdownsR[i];
    if (openDropdown.classList.contains("active-menu")) {
      openDropdown.classList.remove("active-menu");
    }
  }
}

let lastPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  if (scrollPos > 300) {
    document.getElementsByClassName("filter-wrap")[0].style.display = "flex";
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("hamburger-menu-filter")[0].style.display =
      "flex";
  } else {
    document.getElementsByClassName("filter-wrap")[0].style.display = "none";
    document.getElementsByClassName("menu")[0].style.display = "flex";
    document.getElementsByClassName("hamburger-menu-filter")[0].style.display =
      "none";
  }
}

window.addEventListener("scroll", function (e) {
  lastPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastPosition);
      ticking = false;
    });
    ticking = true;
  }
});

function filterMenuFunction() {
  document.getElementById("hamburgerMenu-filter").classList.toggle("active");

  document.getElementsByClassName("menu")[0].style.display = "none";
  document.getElementsByClassName("courses__anchors-header")[0].style.display =
    "flex";
}

window.onclick = function (event) {
  if (!event.target.matches(".hamburger-menu-filter")) {
    let dropdowns = document.getElementsByClassName("hamburger-menu-filter");

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  } else {
    document.getElementsByClassName("menu")[0].style.display = "flex";
    document.getElementsByClassName(
      "courses__anchors-header"
    )[0].style.display = "none";
  }
};

function coursesAllFunction() {
  let links = document.getElementsByClassName("courses__links");

  for (let i = 0; i < links.length; i++) {
    if ("courses__links active-all" == links[0].className) {
      let openDropdown = links[i];
      if (openDropdown.classList.contains("active-all")) {
        openDropdown.classList.remove("active-all");
        document.querySelector(".courses__all").innerHTML = "все категории";
      }
    } else {
      document.getElementById("coursesAllId").classList.toggle("active-all");
      document.querySelector(".courses__all").innerHTML = "скрыть";
    }
  }
}
