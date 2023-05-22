$(document).ready(function () {
	watchCatalogScroll();
});
$(document).scroll(function () {
	watchCatalogScroll();
});
$(document).on('click', '.content__box', function (e) {
	const href = $(this).find('.content__box-title a').attr('href');

	window.location.assign(href);
});
$(document).on('click', '.courses-table tbody td', function (e) {
	const href = $(this).closest('tr').find('a').attr('href');

	window.location.assign(href);
});
$(document).on('click', '.courses__anchor', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	const target = $(href);
	let offset = 0;

	if (!target.length) return;
	if ($('.heading').length) {
		offset = $('.heading').outerHeight();
	}

	const distance = target.offset().top - offset + 20;
	$("html, body").animate({scrollTop: distance}, 600);
});

$('.sticky-catalog-sidebar').stickySidebar({
	topSpacing: $('.heading').outerHeight() + 30,
	bottomSpacing: 20,
	minWidth: 1201

});

/* menu item dropdown*/
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


/* menu hamburger open menu*/
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

function watchCatalogScroll () {
	const nav = $('.courses__anchors');
	if (!window.matchMedia("(max-width: 740px)").matches) {
		if (nav.length) {
			if ($(window).scrollTop() > nav.offset().top - 30) {
				$('body').addClass('show-header-courses__anchors');
			} else {
				$('body').removeClass('show-header-courses__anchors');
			}
		}
	}
}

$(document).on('click', '.js-courses-all', function (e) {
	e.preventDefault();

	const self = $(this);
	const wrapper = self.closest('.courses-links-wrapper');
	const list = wrapper.find('.courses__links');

	if (list.hasClass('active-all')) {
		list.removeClass('active-all');
		self.text('все категории');
	} else {
		list.addClass('active-all');
		self.text('скрыть');
	}

});


/*

// function filterMenuFunction() {
// 	document.getElementById("hamburgerMenu-filter").classList.toggle("active");
//
// 	document.getElementsByClassName("menu")[0].style.display = "none";
// 	document.getElementsByClassName("courses__anchors-header")[0].style.display =
// 		"flex";
// }

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


*/

