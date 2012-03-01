function shida_modules_init() {
	var width = $(".konoha-contents").width();
	$(".shida-demo > *")
		.css("width", width).css("float", "left").css("text-align", "left");
	$(".interactive-demo-output")
		.css("display", "none");
	$(".interactive-demo-button").click(function(e) {
			$(".interactive-demo-output").css("display", "none").fadeIn();
			});
};
