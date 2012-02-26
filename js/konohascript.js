
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
		.attr("class", "konoha-menu-item")
		.css("width", (100/($(".konoha-menu-item").size())+"%"))
		.wrapAll(
			$("<div>")
				.attr("class", "konoha-menu-wrapper"));

	$(".konoha-contents p")
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

function slideNext(i) {
	var images = $("div.slide-images > img");
	var cur = images.eq(i-1).css('z-index', 998);
	if (i == images.length) {
		i = 0;
	}
	images.eq(i).show();
	cur.fadeOut(1000, function() {
		$(this).css( 'z-index' , 1 );
	});
	i++;
	//setTimeout("slideNext()", 1000);
	setTimeout(function () {
		slideNext(i);
	}, 1000);
};

function yoan_modules_init() {
	$(".yoan-slideshow")
		.each(function() {
			$("div.slide-images > img").hide()
			slideNext(0);
		});
};

function getActualDimension(image) {
    var run, mem, w, h, key = "actual";
    // for Firefox, Safari, Google Chrome
    if ("naturalWidth" in image) {
        return {width: image.naturalWidth, height: image.naturalHeight};
    }
    if ("src" in image) { // HTMLImageElement
        if (image[key] && image[key].src === image.src) {return  image[key];}

        if (document.uniqueID) { // for IE
            w = $(image).css("width");
            h = $(image).css("height");
        } else { // for Opera and Other
            mem = {w: image.width, h: image.height}; // keep current style
            $(this).removeAttr("width").removeAttr("height").css({width:"",  height:""});    // Remove attributes in case img-element has set width  and height (for webkit browsers)
            w = image.width;
            h = image.height;
            image.width  = mem.w; // restore
            image.height = mem.h;
        }
        return image[key] = {width: w, height: h, src: image.src}; // bond
    }
    // HTMLCanvasElement
    return {width: image.width, height: image.height};
}

function goccy_modules_init() {
	/* dummy element */
	$(".konoha-event-timeline-sub")
		.each(function() {
			var text = $(this).children(".konoha-event-timeline-text")
			var title_h = $(this).children(".konoha-event-timeline-subtitle").height();
			var h = text.height();
			var image = $(this).children("img");
			var size = getActualDimension(image.get(0));
			var width = size.width;
			var compress_ratio = 1 / (width / 150);
			var cw = size.width * compress_ratio;
			var ch = size.height * compress_ratio;
			image.attr("width", cw);
			image.attr("height", ch);
			image.css({width:cw+"px", height:ch+"px"});
			var subtitle = $(this).children(".konoha-event-timeline-subtitle");
			var rand_color = "#";
			for (var i = 0; i < 3; i++) {
				var rand = Math.floor(Math.random() * 155);
				rand += 100;
				rand_color += rand.toString(16);
			}
			subtitle.css({ borderBottom: "3px solid " + rand_color});
			h = (h < ch)? ch: h;
			$(this).css({ height: title_h*2+h+"px"});
		});
	$(".konoha-event-timeline-main").append("<div>&nbsp;</div>");
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
