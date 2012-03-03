
; /* <- DON'T ERASE THIS */

//$(document).ready(function() {
window.onload = function() {
	/* ----- display contents elements ----- */
	$(document.body)
		.css("display", "block");

	/* ----- load all modules ----- */
	konohascript_init();
	uh_modules_init();
	yoan_modules_init();
	goccy_modules_init();

	/* ------ load external modules ----- */
	hljs.initHighlighting();
	scrollsmoothly.init();

	/* ----- all modules loaded ----- */
	setTimeout(function() {
		$(".konoha-contents")
			.animate({ opacity: 1.0 }, 300);
	}, 400);
};
