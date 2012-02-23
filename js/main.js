window.onload = function() {
	konohascript_init();
	uh_modules_init();
	yoan_modules_init();
	goccy_modules_init();

	/* --- all modules initialized --- */
	$(document.body)
		.css("display", "block"); /* display all elements */
}
