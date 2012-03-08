function shida_modules_init() {
	var width = $(".konoha-contents").width();
	$(".shida-demo > *")
		.css("width", width).css("float", "left").css("text-align", "left");
	$(".interactive-demo-output")
		.css("display", "none");
	$(".interactive-demo-textarea").css("height", 100);
	$(".interactive-demo-button").click(function(e) {
			var textarea_data = $(".interactive-demo-textarea").val();
			$.ajax({
				url: "/cgi-bin/konoha2js.k",
				type: "POST",
				cache: false,
				data: textarea_data + "\n",
				success: function(msg) {
					var konoha = null;
					var script = null;
					eval(msg);
					konoha_main();
					$(".interactive-demo-output").html(konoha.OUT);
					$(".interactive-demo-output").css("display", "none").fadeIn();
				}
			});
		});
};
