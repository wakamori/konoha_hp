function konohascript_init()
{
    $("#konohascript-header")
        .append(
            $("<img>")
                .attr("src", "images/logo.png")
                .css({
                    position : "relative",
                    top : "-10px",
                    height : "80px" }))
        .append(
            $("<img>")
                .attr("src", "images/konohascript.png")
                .css({
                    position : "relative",
                    top : "10px",
                    height : "100px" }))
        .append(
            $("<div>")
                .attr("id", "konohascript-header-subtitle")
                .append(
                    $("<img>")
                        .attr("src", "images/subtitle.png")
                        .css({
                            position : "relative",
                            top : "-40px",
                            height : "50px" })))
    $("#konohascript-menu div")
        .wrapAll(
            $("<div>")
                .attr("id", "konohascript-menu-wrapper"));
    $("#konohascript-footer")
        .html("Copyright © 2012 Konoha Project");
}
