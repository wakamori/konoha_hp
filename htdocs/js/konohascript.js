; /* <- DON'T ERASE THIS */

var URL = "http://localhost/konoha";
var IMG_URL = URL + "/images";
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
	$("#playground").click(function() { location.href = URL + "/playground/"; });
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
/*		.append($("<div>").css("padding-bottom","50px")
				.append($("<div>").css({float:"left",width:"30%"})
						.append($("<img>").attr("src","images/logo.png").css("width","50px"))
						.append($("<span>").text("Konoha").css({fontSize:"28px",fontWeight:"bold",marginLeft:"10px"})))
				.append($("<div>").css({float:"left",width:"70%"})
						.append($("<div>").attr("class","uh-columnbox")
								.each(function(){
									var container = $(this);
									$(".konoha-menu-item").each(function() {
										var text = $(this).text();
										container.append($("<div>")
														 .append($("<ul>").css({textAlign:"left",listStyleType:"none"})
																 .each(function(){
																	 $(this)
																		 .append($("<li>").css({fontWeight:"bold",marginBottom:"3px"}).text(text))
																		 .append($("<li>").css("margin","1px 12px").text("dummy"));})));});})))
				.append($("<div>").css("clear","both")))*/
		.append(
			$("<div>")
				.attr("class", "konoha-footer-copyright")
				.html("Copyright © 2012 Konoha Project"));
};
