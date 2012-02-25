
; /* <- DON'T ERASE THIS */

$(document).ready(function() {
	konohascript_init();
	uh_modules_init();
	yoan_modules_init();
	goccy_modules_init();

	/* --- all modules initialized --- */
	/* display contents elements */
	$(document.body)
		.css("display", "block");
	setTimeout(function() {
		$(".konoha-contents")
			.animate({ opacity: 1.0 }, 400);
	}, 400);
});
