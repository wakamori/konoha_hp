$(function konoha_projects_init(){
	$("#qt").attr('href', URL + "/projects/qtmediakit");
	$("#dscript").attr('href', URL + "/projects/dscript");
	$("#html5").attr('href', URL + "/projects/html5");
	$("#hpc").attr('href', URL + "/projects/hpc");
	$("#aspen").attr('href', URL + "/projects/apsen");

	$('.sentence')
		.each(function() {
			var children = $(this).children();
			children
				.css({ width: 100,
					   float: "left" })
				.filter(":last-child")
				.css({ width: 750,
					   float: "right"
					});
			$(this)
				.append(
					$("<div>")
						.css("clear", "both"));
		});
});
