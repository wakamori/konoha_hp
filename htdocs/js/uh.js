function uh_modules_init() {
	$(".uh-columnbox")
		.each(function() {
			var children = $(this).children();
			var par = (100/(children.size()))+"%";
			children
				.css({ width: par,
					   float: "left" })
				.filter(":last-child")
				.css("float", "right");
			$(this)
				.append(
					$("<div>")
						.css("clear", "both"));
		});

	$(".uh-script")
		.each(function() {
			var script = $(this).text();
			$(this).text($.trim(script));
		})
		.wrapInner(
			$("<pre>")
				.wrapInner(
					$("<code>")
						.attr("class", "python uh-script-interactive")));

	hljs.initHighlighting();
};
