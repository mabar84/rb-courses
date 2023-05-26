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
		item.closest(".text-content")
			.querySelector(".toggle")
			.classList.toggle("collapsed");

		item.classList.toggle("collapsed");
	});
});
//

const moreReviews = document.getElementById("more-reviews");

moreReviews?.addEventListener("click", () => {
	const collapsedCardsContainer = moreReviews.closest("#reviews");
	const allCollapsedCards =
		collapsedCardsContainer?.querySelectorAll(".card.collapsed");
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
//add comment
const addCommentAll = document.querySelectorAll(".add-comment");

addCommentAll?.forEach((item) => {
	item.addEventListener("click", () => {
		document.getElementById("modal-comment")?.classList.remove("collapsed");
		document.body.style.overflow = "hidden";
	});
});
//add review
document.getElementById("add-review")?.addEventListener("click", () => {
	document.getElementById("modal-review")?.classList.remove("collapsed");
	document.body.style.overflow = "hidden";
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

//ratings
const rates = document.querySelectorAll(".rate");
rates.forEach((rate) => {
	rate.addEventListener("click", function (e) {
		e.preventDefault();
		if (e.target.getAttribute("title") === "text") {
			const name = "." + e.target.getAttribute("for");
			rate.querySelector(name).checked = true;
			const selectedRating = name[6];

			console.log("block", rate.id, "has value ", selectedRating);
		}
	});
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
		let offsetPosition =
			elementPosition + window.pageYOffset - headingOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	});
});
