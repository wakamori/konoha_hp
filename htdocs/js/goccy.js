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
