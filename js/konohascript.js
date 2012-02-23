
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
		.wrapAll(
			$("<div>")
				.attr("class", "konoha-menu-wrapper"));

	$(".konoha-footer")
		.html("Copyright © 2012 Konoha Project");
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
	$(".uh-halfbox")
		.each(function() {
			$(this).children()
				.css({ float:  "left",
					   textAlign: "left",
					   width: "49%" })
				.filter(":last-child")
				.css("float", "right");
		})
		.append(
			$("<div>")
				.css("clear", "both"));

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
							   border:       "2px double rgba(255,255,255,1.0)",
							   boxShadow:    "1px 1px 3px rgba(0,0,0,0.8)",
							   borderRadius: "8px" })));

	$("p")
		.each(function() {
			var p = $(this);
			var keywords = ["Konoha", "JavaScript", "Java", "Ruby", "C++"];
			jQuery.each(keywords, function() {
				p.highlight(this);
			});
		});
	hljs.initHighlighting();
};
