
; /* <- DON'T ERASE THIS */

function konohascript_init()
{
	$(".konoha-header")
		.append(
			$("<img>")
				.attr("src", "images/logo.png")
				.attr("class", "konoha-header-logo"))
		.append(
			$("<div>")
				.append(
					$("<span>")
						.text("Konoha")
						.attr("class", "konoha-header-title"))
				.append(
					$("<span>")
						.text("A Statically-typed Scripting Langauge")
						.attr("class", "konoha-header-subtitle")))
		.each(function() {
			$(this).children()
				.css("float", "left");
		})
		.append(
			$("<div>")
				.css("clear", "both"));

	$(".konoha-menu span")
		.css({ width: (100/($(".konoha-menu span").size())+"%"),
			   height: ($(".konoha-menu").css("height")-1) })
		.wrapAll(
			$("<div>")
				.attr("class", "konoha-menu-wrapper"));

	$(".konoha-footer")
		.append(
			$("<div>")
				.attr("class", "uh-columnbox")
				.each(function(){
					var container = $(this);
					var items = $(".konoha-menu div span");
					jQuery.each(items, function() {
						var text = $(this).text();
						container
							.append(
								$("<div>")
									.css("text-align", "center")
									.append(
										$("<ul>")
											.attr("class", "konoha-footer-list")
											.append(
												$("<li>")
													.attr("class", "konoha-footer-lhead")
													.text(text))
											.each(function() {
												/* ----- dummy generation ----- */
												var list = $(this);
												var count = Math.floor(Math.random() * 4) + 1;
												for (var i = 0; i < count; i++) {
													list
														.append(
															$("<li>")
																.attr("class", "konoha-footer-litem")
																.text("dummy"));
												}
											})));
					});
				}))
		.append(
			$("<div>")
				.attr("class", "konoha-footer-copyright")
				.html("Copyright © 2012 Konoha Project"))
};

function yoan_modules_init() {
	$(".cn-slideshow").slideshow();
};

function goccy_modules_init() {
	/* dummy element */
	$(".goccy-timeline")
		.text("timeline")
		.css({ width:      "100%",
			   height:     "256px",
			   background: "lightgray"});
};

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

	$("p")
		.each(function() {
			var p = $(this);
			p.css("text-align", "left");
			var keywords = ["Konoha", "JavaScript", "Java", "Ruby", "Python", "Perl", "C++"];
			jQuery.each(keywords, function() {
				p.highlight(this);
			});
		});

	$(".uh-script")
		.wrapInner(
			$("<pre>")
				.wrapInner(
					$("<code>")
						.attr("class", "python")
						.css({ textAlign:    "left",
							   fontFamily:   "monaco",
							   fontSize:     "13px",
							   padding:      "10px",
							   margin:       "15px",
							   border:       "2px double rgba(255,255,255,1.0)",
							   boxShadow:    "1px 1px 3px rgba(0,0,0,0.8)",
							   borderRadius: "8px" })));

	hljs.initHighlighting();
};
