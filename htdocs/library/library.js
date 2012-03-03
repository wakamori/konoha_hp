$( function library_init() {
	$('#cairo').attr('href', URL + '/library/cairo');
	$('#compiler').attr('href', URL + '/library/compiler');
	$('#dffi').attr('href', URL + '/library/dffi');
	$('#dscript').attr('href', URL + '/library/dscript');
	$('#gsl').attr('href', URL + '/library/gsl');
	$('#gwt').attr('href', URL + '/library/gwt');
	$('#i').attr('href', URL + '/library/i');
	$('#io').attr('href', URL + '/library/io');
	$('#json').attr('href', URL + '/library/json');
	$('#liboauth').attr('href', URL + '/library/liboauth');
	$('#llvm').attr('href', URL + '/library/llvm');
	$('#math').attr('href', URL + '/library/math');
	$('#memcached').attr('href', URL + '/library/memcached');
	$('#mpi').attr('href', URL + '/library/mpi');
	$('#nfc').attr('href', URL + '/library/nfc');
	$('#opengl').attr('href', URL + '/library/opengl');
	$('#posix').attr('href', URL + '/library/posix');
	$('#proc').attr('href', URL + '/library/proc');
	$('#qt').attr('href', URL + '/library/qt');
	$('#signal').attr('href', URL + '/library/signal');
	$('#socket').attr('href', URL + '/library/socket');
	$('#sql').attr('href', URL + '/library/sql');
	$('#thread').attr('href', URL + '/library/thread');
	$('#xml').attr('href', URL + '/library/xml');

	$('.lib > a')
		.css({'color': '#000000', 'opacity': 1});
});
