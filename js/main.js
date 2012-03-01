
; /* <- DON'T ERASE THIS */

$(document).ready(function() {
	/* ----- display contents elements ----- */
	$(document.body)
		.css("display", "block");

	/* ----- load all modules ----- */
	konohascript_init();
	uh_modules_init();
	yoan_modules_init();
	goccy_modules_init();
	shida_modules_init();

	/* ----- all modules loaded ----- */
	setTimeout(function() {
		$(".konoha-contents")
			.animate({ opacity: 1.0 }, 300);
	}, 400);
});
