//sticky banner
const stickyBanner = document.getElementById("sticky-banner");
const windowInnerHeight = window.innerHeight;
window.addEventListener("scroll", () => {
	if (
		window.pageYOffset > windowInnerHeight / 2 &&
		window.pageYOffset <
			document.body.offsetHeight - windowInnerHeight - 250
	) {
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

// show more
const showMore = document.querySelectorAll(".show-more");

showMore?.forEach((item) => {
	item.addEventListener("click", () => {
		const collapsedCardsContainer = item.closest(
			".collapsed-cards-container"
		);
		const allCollapsedCards =
			collapsedCardsContainer?.querySelectorAll(".collapsed");
		allCollapsedCards?.forEach((el) => {
			el.classList.remove("collapsed");
		});
		item.classList.add("collapsed");
	});
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

console.log(sort);
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
