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

	$(".yoan-slideshow")
		.text("slideshow")
		.css({ width:      "100%",
			   height:     "256px",
			   background: "lightgray"});

	$(".uh-halfbox")
		.each(function() {
			$(this).children()
				.css("float", "left")
				.filter(":last-child")
				.css("float", "right");
		})
		.append(
			$("<div>")
				.css("clear", "both"));

	$(".uh-script")
		.wrapInner(
			$("<pre>")
				.css({ textAlign:    "left",
					   fontWeight:   "bold",
					   fontSize:     "13px",
					   fontFamily:   "monaco",
					   color:        "white",
					   padding:      "10px",
					   background:   "-webkit-radial-gradient(center, ellipse cover, rgba(50,50,50,0.8) 0%,rgba(35,35,35,0.8) 47%,rgba(5,5,5,0.8) 100%)",
					   /* FIXME: for moz */
					   boxShadow:    "4px 4px rgba(60, 60, 60, 0.4)",
					   borderRadius: "8px" }));

	$(".goccy-timeline")
		.text("timeline")
		.css({ width:      "100%",
			   height:     "256px",
			   background: "lightgray"});

	$(".konoha-footer")
		.html("Copyright © 2012 Konoha Project");

	$(document.body)
		.css("display", "block"); /* display all elements */
}
