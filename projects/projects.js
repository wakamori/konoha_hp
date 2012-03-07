$(function konoha_projects_init(){
	$("#qt").attr('href', URL + "/projects/qtmediakit");
	$("#dscript").attr('href', URL + "/projects/dscript");
	$("#html5").attr('href', URL + "/projects/html5");
	$("#hpc").attr('href', URL + "/projects/hpc");
	$("#aspen").attr('href', URL + "/projects/apsen");

	$('.project > h3')
		.each(function() {
			console.log(this);
			var rand_color = "#";
			for (var i = 0; i < 3; i++) {
				var rand = Math.floor(Math.random() * 155);
				rand += 100;
				rand_color += rand.toString(16);
			}
			$(this).css({ borderBottom: "3px solid" + rand_color});
		});

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
