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

	$(".uh-csvtable")
		.each(function() {
			var target = $(this);
			var csv = $.csv()($.trim(target.text()));
			target.text("");
			var table = $("<table>");
			function replaceLink(text) {
				if (text.indexOf("http://") == 0) {
					text = $("<a>")
						.attr("href", text)
						.text("[link]")
						.get(0).outerHTML;
				}
				return text;
			};
			$(csv).each(function(idx) {
				var tr = $("<tr>");
				$.each(this, function() {
					tr.append($((idx == 0) ? "<th>" : "<td>").html(replaceLink($.trim(this))));
				});
				table.append(tr);
			});
			target.append(table);
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
