const stickyBanner = document.getElementById("sticky-banner");
const windowInnerHeight = window.innerHeight;

window.addEventListener("scroll", () => {
	if (
		window.pageYOffset > windowInnerHeight / 2 &&
		window.pageYOffset <
			document.body.offsetHeight - windowInnerHeight - 250
	) {
		stickyBanner.classList.add("sticky");
	} else {
		stickyBanner.classList.remove("sticky");
	}
});
