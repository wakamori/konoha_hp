function yoan_modules_init() 
{
	var slideData = [
		{img: null, x: 650, y: 0, str: "Design Principle"},
		{img: null, x: 0,   y: 0, str: "Static/Dynamic"},
		{img: null, x: 650, y: 0, str: "Qt"},
		{img: null, x: 650, y: 0, str: "Aspen Project"}
	];
	
	$(".yoan-slideshow")
		.each(function() {
			$("div.slide-images").css('position', 'relative');
			var images = $("div.slide-images > img").hide()
			for (var i in slideData) {
				slideData[i].img = images.eq(i);
			}
			slideNext(0);
		});

	function showImage(data) {
		if (data.str == "" && $('.slide-images #article').length > 0) {
			$('.slide-images #article').hide();
		}
		data.img.css('z-index', 100).removeClass().show(); // second top of z
		$('#article')
			.css({
				'left': data.x,
				'top': data.y
			});
		$('#article p').html('<p>' + data.str + '</p>');
		$('.slide-images #article').removeClass().show();
	};
	
	function slideNext(i) {
		var images = $("div.slide-images > img");
		var cur = images.eq(i-1).css('z-index', 1000).show(); // top of z;
		i = (i >= images.length) ? 0 : i;
		showImage(slideData[i]);
		cur.addClass('animated fadeOut');
		$('#article').addClass('animated bounceInLeft');
		setTimeout(function () {
			slideNext(++i);
		}, 5000);
	};
};
