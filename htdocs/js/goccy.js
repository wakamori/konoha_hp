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
			var text = $(this).children(".konoha-event-timeline-text");
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
	$(".konoha-demo-contents-subtitle")
		.each(function() {
			var rand_color = "#";
			for (var i = 0; i < 3; i++) {
				var rand = Math.floor(Math.random() * 155);
				rand += 100;
				rand_color += rand.toString(16);
			}
			$(this).css({ borderBottom: "3px solid" + rand_color});
		});
	$(".konoha-demo-contents img").click(function(event){
		//popup lightbox video
		var video_path = $(this).attr("id");
		var popup_window = document.createElement("div");

		var video = document.createElement("video");
		video.className = "konoha-demo-contents-video";
		video.src = "../video/" + video_path + ".mov";
		video.controls = true;

		var codearea = document.createElement("span");
		codearea.className = "konoha-demo-contents-codearea";
		codearea.style.width = 896 * 0.2 + "px";

		popup_window.appendChild(video);
		popup_window.appendChild(codearea);

		var x = window.innerWidth / 2;
		var y = window.innerHeight / 2;
		popup_window.style.width = "1px";
		popup_window.style.height = "10px";
		popup_window.style.top = y + "px";
		popup_window.style.left = x + "px";
		var after_x = x - 448;
		var after_y = y - 256;
		popup_window.className = "konoha-lightbox-window";
		document.getElementById("body").appendChild(popup_window);
		var filter = document.createElement("div");
		filter.className = "konoha-lightbox-filter";
		filter.style.width = window.innerWidth + "px";
		filter.style.height = window.innerHeight + "px";
		document.getElementById("body").appendChild(filter);
		$(".konoha-lightbox-filter").click(function(event) {
			$(this).remove();
			$(".konoha-lightbox-window").remove();
		});
		$(".konoha-lightbox-filter").animate({
			opacity:1.0,
		}, 1000);
		$(".konoha-lightbox-window").animate({
			top:after_y + "px",
			width: "1px",
			height:"512px",
		}, 500, function() {
			$(this).animate({
				left:after_x + "px",
				width: "896px",
			}, 500, function() {
				$(".konoha-demo-contents-codearea").append("<u>preview this sample's code</u>");
				$(".konoha-demo-contents-codearea u").click(function(event) {
					var script = $.ajax({
						url: "../scripts/particle.k", //TODO: get script name
						async: false
					}).responseText;
					$(this).parent().css({
						top:"-512px",
					});
					$(this).parent()
						.wrapInner(
							$("<pre>")
								.wrapInner(
									$("<code>")
										.attr("class", "python uh-script-interactive")));
					$(this).parent().text(script);
					$(".konoha-demo-contents-codearea").animate({
						left:"0px",
						opacity:0.7,
						height: "480px",
						width:"896px",
					}, 500, function() {
						//$(this).text(script);
					});
				});
			});
		});
	});
}
