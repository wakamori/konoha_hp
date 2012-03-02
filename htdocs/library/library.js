$( function library_init() {
	$('#qt').attr('href', URL + '/library/qt');
	$('#math').attr('href', URL + '/library/math');
	$('#posix').attr('href', URL + '/library/posix');

	$('.lib > a')
		.css({'color': '#000000', 'opacity': 1});
});
