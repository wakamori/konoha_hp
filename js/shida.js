function replaceAll(s, src, dest) {
	return s.split(src).join(dest);
}
function response_escape(s) {
	s = replaceAll(s, '<', '&lt;');
	s = replaceAll(s, '>', '&gt;');
	s = replaceAll(s, "\"", '&quot;');
	s = replaceAll(s, '&', '&amp;');
	s = replaceAll(s, "\n", '<br>');
	return s;
}
function shida_modules_init() {
	var width = $(".konoha-contents").width();
	$(".shida-demo > *")
		.css("width", width).css("text-align", "left");
	$(".interactive-demo-output")
		.css("display", "none");
	$(".interactive-demo-textarea").css("height", 100);
	$(".interactive-demo-button").click(function(e) {
			var textarea_data = $(".interactive-demo-textarea").val();
			$.ajax({
				url: "http://konoha.ubicg.ynu.ac.jp/aspen/cgi-bin/konoha2js.k",
				type: "POST",
				cache: false,
				data: textarea_data + "\n",
				success: function(msg) {
					var konoha = null;
					var script = null;
					eval(msg);
					konoha_main();
					var res = response_escape(konoha.OUT)
					$(".interactive-demo-output").html(res);
					$(".interactive-demo-output").css("display", "none").fadeIn();
				}
			});
		});
};
