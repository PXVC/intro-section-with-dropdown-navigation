const hamburger = $("#hamburger");
const menu = $("#menu");
const blackBg = $("#black-bg");
hamburger.click((e) => {
	// e.preventDefault();
	menu.toggleClass("active");
	if (menu.hasClass("active")) {
		hamburger.attr("src", "images/icon-close-menu.svg");
		blackBg.css("z-index", "0");
		blackBg.css("opacity", "0.5");
	} else {
		hamburger.attr("src", "images/icon-menu.svg");
		blackBg.css("z-index", "-1");
		blackBg.css("opacity", "0");
	}
});
