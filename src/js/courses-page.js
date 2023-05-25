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

showCommentsAll.forEach((show) => {
	show.addEventListener("click", () => {
		show.closest(".comments").classList.remove("collapsed");
	});
});

hideCommentsAll.forEach((hide) => {
	hide.addEventListener("click", () => {
		hide.closest(".comments").classList.add("collapsed");
	});
});
