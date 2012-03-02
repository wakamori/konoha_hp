function yoan_modules_init() 
{
	var slideData = [
		{img: null, from: 'left', x: 700, y: 0, color: '#ffffff',
			bg: '#000000', barcol: '#330066', title: "Design Principle"},
		{img: null, from: 'right', x: 0,   y: 0, color: '#ffffff',
			bg: '#000000', barcol: '#330066', title: "Static/Dynamic"},
		{img: null, from: 'up', x: 650, y: 0, color: '#000000',
			bg: '#ffffff', barcol: '#330066', title: "Various Library and Platforms"},
		{img: null, from: 'down', x: 650, y: 0, color: '#ffffff',
			bg: '#000000', barcol: '#330066', title: "Aspen Project"}
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
		if (data.title == "" && $('.slide-images #article').length > 0) {
			$('.slide-images #article').hide();
		}
		data.img.css('z-index', 100).removeClass().show();
		data.img.css('z-index', 100).removeClass().show();
		$('#article')
			.css({
				'background': data.bg,
				'left': data.x,
				'top': data.y
			});
		$('.str')
			.css({
				'color': data.color
			});
		$('#article p').html('<p>' + data.title + '</p>');
		$('.slide-images #article').removeClass().show();
	};
	
	function slideNext(i) {
		var images = $("div.slide-images > img");
		var cur = images.eq(i-1).css('z-index', 1000).show();
		i = (i >= images.length) ? 0 : i;
		var data = slideData[i];
		showImage(data);
		cur.addClass('animated fadeOut');
		if (data.from == 'left') {
			$('#article').addClass('animated fadeInRightBig');
			$('#article title').addClass('animated fadeInRightBig');
		}
		else if (data.from == 'right') {
			$('#article').addClass('animated fadeInLeftBig');
			$('#var').addClass('animated bounceInLeft');
		}
		else if (data.from == 'up') {
			$('#article').addClass('animated fadeInDownBig');
		}
		else { // data.from == 'down'
			$('#article').addClass('animated fadeInUpBig');
		}
		setTimeout(function () {
			slideNext(++i);
		}, 10000);
	};
};
