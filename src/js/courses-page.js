//sticky banner
const stickyBanner = document.getElementById("sticky-banner");
const windowInnerHeight = window.innerHeight;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > windowInnerHeight / 2) {
    stickyBanner?.classList.add("sticky");
  } else {
    stickyBanner?.classList.remove("sticky");
  }
});

//
//   anchors-links
const anchorsLinks = document.querySelectorAll(".anchors-item");
const headerStatic = document.querySelector(".header");
const heading = document.querySelector(".heading");

anchorsLinks?.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const ID = link.getAttribute("href").substr(1);

    let element = document.getElementById(ID);
    let elementPosition = element.getBoundingClientRect().top;

    let headerOffset = headerStatic.clientHeight;
    let headingOffset = heading.clientHeight;

    // let offsetPosition = elementPosition + window.pageYOffset;
    let offsetPosition = elementPosition + window.pageYOffset - headingOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//reviews
const showCommentsAll = document.querySelectorAll(".show-comments");
const hideCommentsAll = document.querySelectorAll(".hide-comments");

showCommentsAll?.forEach((show) => {
  show.addEventListener("click", () => {
    show.closest(".comments").classList.remove("collapsed");
  });
});
hideCommentsAll?.forEach((hide) => {
  hide.addEventListener("click", () => {
    hide.closest(".comments").classList.add("collapsed");
  });
});
//
const openReview = document.querySelectorAll(".open-review");
openReview?.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".text-content").querySelector(".toggle").classList.toggle("collapsed");

    item.classList.toggle("collapsed");
  });
});
//

const moreReviews = document.getElementById("more-reviews");

moreReviews?.addEventListener("click", () => {
  const collapsedCardsContainer = moreReviews.closest("#reviews");
  const allCollapsedCards = collapsedCardsContainer?.querySelectorAll(".card.collapsed");
  allCollapsedCards?.forEach((el) => {
    el.classList.remove("collapsed");
  });
});

//
const allCategories = document.querySelector(".all-categories");
allCategories?.addEventListener("click", () => {
  allCategories
    .closest(".other-categories")
    .querySelectorAll(".toggle")
    .forEach((item) => {
      item.classList.toggle("collapsed");
    });
  allCategories.classList.toggle("collapsed");
});

//
const showMore = document.querySelector(".show-more");
showMore?.addEventListener("click", () => {
  showMore
    .closest(".other-schools")
    .querySelectorAll(".toggle")
    .forEach((item) => {
      item.classList.toggle("collapsed");
    });
  showMore.classList.toggle("collapsed");
});
//sort
const sort = document.getElementById("sort");
const sortWrapper = document.querySelectorAll(".sort-wrapper");

const sortItems = document.querySelectorAll(".sort-item");
const sortItemActive = document.querySelectorAll(".sort-item.active");
const sortby = document.querySelector(".sortby");

if (sortby) {
  sortby.textContent = sortItemActive[0].textContent;
}

sortItems?.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    sortItems?.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
    const sortItemActive = document.querySelectorAll(".sort-item.active");
    sortby.textContent = sortItemActive[0].textContent;

    item.closest(".sort-wrapper").classList.remove("active");
  });
});

sort?.addEventListener("click", () => {
  sort.closest(".sort-wrapper").classList.toggle("active");
});

//modal
//ratings
const rates = document.querySelectorAll(".rate");
rates?.forEach((rate) => {
  rate.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.getAttribute("title") === "text") {
      const name = "." + e.target.getAttribute("for");
      rate.querySelector(name).checked = true;
      const selectedRating = name[6];

      console.log("block", rate.id, "has value ", selectedRating);
      rate.closest(".rate-wrapper").classList.remove("empty");
    }
  });
});

//add comment
const modalComment = document.getElementById("modal-comment");
const addCommentAll = document.querySelectorAll(".add-comment");
addCommentAll?.forEach((item) => {
  item.addEventListener("click", () => {
    modalComment?.classList.remove("collapsed");
    document.body.style.overflow = "hidden";
  });
});
//add review
const modalReview = document.getElementById("modal-review");

document.getElementById("add-review")?.addEventListener("click", () => {
  modalReview?.classList.remove("collapsed");
  document.body.style.overflow = "hidden";
});

// modalComment errors
const modalCommentInputs = modalComment.querySelectorAll(".required");
const modalCommentButton = modalComment.querySelector(".button");

modalCommentButton.addEventListener("click", () => {
  let areFieldsFilled = true;
  modalCommentInputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("error");
      areFieldsFilled = false;
    }
    input.addEventListener("input", () => {
      input.classList.remove("error");
    });
  });
  if (areFieldsFilled) {
    modalComment.classList.add("collapsed");
    document.body.style.overflow = "auto";
    console.log("Комментарий оставлен");
  }
});

// modalReview errors
const modalReviewInputs = modalReview.querySelectorAll(".required");
const modalReviewButton = modalReview.querySelector(".button");

modalReviewButton.addEventListener("click", () => {
  let areFieldsFilled = true;
  const rates = modalReview.querySelectorAll(".rate");
  const empryRates = modalReview.querySelectorAll(".empty");

  rates.forEach((rate) => {
    rate.closest(".rate-wrapper").classList.add("error");
  });

  modalReviewInputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("error");
      areFieldsFilled = false;
    }
    input.addEventListener("input", () => {
      input.classList.remove("error");
    });
  });
  if (areFieldsFilled && empryRates.length === 0) {
    modalReview.classList.add("collapsed");
    document.body.style.overflow = "auto";
    console.log("Отзыв оставлен");
  }
});

//close modal
const modalBgAll = document.querySelectorAll(".modal-bg");
const modalCloseAll = document.querySelectorAll(".modal-close");

modalBgAll?.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".modal").classList.add("collapsed");
    document.body.style.overflow = "auto";
  });
});
modalCloseAll?.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".modal").classList.add("collapsed");
    document.body.style.overflow = "auto";
  });
});

// customSelectCourse
const customSelectCourse = document.querySelector(".custom-select-course");
const selectSelectedCourse = customSelectCourse.querySelector(".select-selected");
const selectItems = customSelectCourse.querySelectorAll(".select-item");
const searchInput = customSelectCourse.querySelector(".search-input");

selectSelectedCourse.addEventListener("click", () => {
  customSelectCourse.classList.toggle("open");
});

selectItems.forEach((el) => {
  el.addEventListener("click", () => {
    selectSelectedCourse.textContent = el.textContent;
    customSelectCourse.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  const isClickInsideCourse = customSelectCourse.contains(e.target);
  if (!isClickInsideCourse) {
    customSelectCourse.classList.remove("open");
  }
});

// search filter
if (searchInput) {
  function filterList() {
    let filter = searchInput.value.toUpperCase();

    for (let i = 0; i < selectItems.length; i++) {
      let text = selectItems[i].textContent.toUpperCase();
      // let parent = selectItems[i].closest(".account-services-item");

      if (text.indexOf(filter) > -1) {
        // parent.classList.remove("filter-hidden");
        selectItems[i].classList.remove("hidden");
      } else {
        // parent.classList.add("filter-hidden");
        selectItems[i].classList.add("hidden");
      }
    }
  }
  searchInput.addEventListener("input", filterList);
}
