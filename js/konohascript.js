function konohascript_init()
{
	var header = document.getElementsByClassName("konohascript-header")[0];
	var logo = document.createElement("img");
	logo.src = "images/logo.png";
	logo.style.position = "relative";
	logo.style.left = "-100px";
	logo.style.top = "-10px";
	logo.style.height = "80px";
	var konohascript = document.createElement("img");
	konohascript.src = "images/konohascript.png";
	konohascript.style.position = "relative";
	konohascript.style.top = "10px";
	konohascript.style.left = "-80px";
	konohascript.style.height = "100px";
	var subtitle = document.createElement("div");
	subtitle.className = "konohascript-header-subtitle";
	var subtitle_img = document.createElement("img");
	subtitle_img.src = "images/subtitle.png";
	subtitle_img.style.position = "relative";
	subtitle_img.style.top = "-40px";
	subtitle_img.style.height = "50px";
	subtitle.appendChild(subtitle_img);
	header.appendChild(logo);
	header.appendChild(konohascript);
	header.appendChild(subtitle);
	var menu = document.getElementsByClassName("konohascript-menu")[0];
	var menu_inner = menu.innerHTML;
	menu.innerHTML = "";
	var menu_wrapper = document.createElement("div");
	menu_wrapper.className = "konohascript-menu-wrapper";
	menu.appendChild(menu_wrapper);
	$(".konohascript-menu-wrapper").append(menu_inner);
	var footer = document.getElementsByClassName("konohascript-footer")[0];
	footer.innerHTML = "Copyright © 2012 Konoha Project";
}
