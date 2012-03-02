function uh_modules_init() {
    $(".uh-columnbox")
        .each(function() {
            var children = $(this).children();
            var par = (100/(children.size()))+"%";
            children
                .css({ width: par,
                       float: "left" })
                .filter(":last-child")
                .css("float", "right");
            $(this)
                .append(
                    $("<div>")
                        .css("clear", "both"));
        });

    $(".uh-csvtable")
        .each(function() {
            var target = $(this);
            var csv = $.csv()($.trim(target.text()));
            target.text("");
            function replaceLink(text) {
                if (text.indexOf("http://") == 0) {
                    text = $("<a>")
                        .attr("href", text)
                        .text("[link]")
                        .get(0).outerHTML;
                }
                return text;
            };
            var table = $("<table>");
            var tx_base = new Array();
            $(csv).each(function(idx) {
                var tr = $("<tr>");
                var col_idx = 0;
                $.each(this, function() {
                    var text = $.trim(this);
                    if (tx_base.length < col_idx) tx_base.append(null);
                    if (text.length == 0) {
                        var tx = tx_base[col_idx];
                        tx.attr("rowspan", (eval(tx.attr("rowspan"))+1));
                    }
                    else {
                        var tx = $((idx == 0) ? "<th>" : "<td>").attr("rowspan", 1).html(replaceLink(text));
                        tx_base[col_idx] = tx;
                        tr.append(tx);
                    }
                    col_idx += 1;
                });
                table.append(tr);
            });
            target.append(table);
        });

    $(".uh-script")
        .each(function() {
            var script = $(this).text();
            $(this).text($.trim(script));
        })
        .wrapInner(
            $("<pre>")
                .wrapInner(
                    $("<code>")
                        .attr("class", "python uh-script-interactive")));
};
