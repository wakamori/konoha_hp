; /* <- DON'T ERASE THIS */

var URL = "http://konohascript.org";
var IMG_URL = URL + "/images";
var KLAB_URL = "http://www.ubicg.ynu.ac.jp/";
var DEOS_URL = "http://www.dependable-os.net/";

function konohascript_init()
{
	$(".konoha-header")
		.append(
			$("<img>")
				.attr("src", IMG_URL + "/logo.png")
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
		.attr("class", "konoha-menu-item")
		.css("width", (100/($(".konoha-menu-item").size())+"%"))
		.wrapAll(
			$("<div>")
				.attr("class", "konoha-menu-wrapper"));

	$("#home").click(function() { location.href = URL; });
	$("#projects").click(function() { location.href = URL + "/projects/"; });
	$("#doc").click(function() { location.href = URL + "/document/"; });
	//$("#playground").click(function() { location.href = URL + "/playground/"; });
	$("#library").click(function() { location.href = URL + "/library/"; });
	$("#demo").click(function() { location.href = URL + "/demo/"; });
	$("#download").click(function() { location.href = URL + "/download/"; });

	$(".konoha-contents div.hllang p")
		.each(function() {
			var p = $(this);
			var keywords = ["Konoha", "JavaScript", "Java", "Ruby", "Python", "Perl", "C++"];
			$.each(keywords, function() {
				p.highlight(this);
			});
		});

	$(".konoha-footer")
		.append(
			$("<div>")
				.attr("class", "konoha-footer-copyright")
				.html("Copyright (c) 2012 Konoha Project"))
		.append(
			$("<a>")
				.attr("href", "#body")
				.append(
					$("<img>")
						.attr("src", IMG_URL + "/logo_white.png")
						.attr("class", "konoha-footer-logo")));
};
