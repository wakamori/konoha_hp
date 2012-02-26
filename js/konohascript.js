
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
