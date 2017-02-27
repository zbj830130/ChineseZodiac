$(function () {

    var $colursList = $(".nameColourList");

    var names = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    var colors = ['#b25d25', '#808080', '#ffb61e', '#d41863', '#eacd76', '#8d4bbb', '#4169E1', '#00e09e', '#00e500', '#f00056', '#8A2BE2', '#fabc35'];

    zodiacSort(names);
    colourSelector(names, colors);

    $("#tabs").tabs();

    $("#submitColor").click(function () {
        if ($("#zodiacName").val().length == 0) {
            alert("Please Select A Zodiac First");
            return;
        }
        var zodiacName = $("#zodiacName").val();
        var hex = "#" + hexFromRGB($("#red").slider("value"), $("#green").slider("value"), $("#blue").slider("value"));

        $("#color_" + zodiacName).css("background-color", hex);
        $("#hiden_" + zodiacName).val(hex);
    });

});

function zodiacSort(names) {
    var $list = $(".zodiacList");

    for (var i = 0; i < 12; i++) {
        var name = names[i];

        $list.append(
            $('<div class="items"><h3 class="item_title">Order:' + (i + 1) + '</h3><img src="img/detail_' + name + '.gif"></div>')
        );
    }

    $(".item_title").bind('mouseover', function () {
        $(this).css("cursor", "move")
    });


    $list.sortable({
        opacity: 0.6,
        revert: true,
        cursor: 'move',
        handle: '.item_title',
        update: function () {
            var new_order = [];
            $list.children(".items").each(function (index) {
                $(this).find(".item_title").text("Order:" + (index + 1));
            });

        }
    });
}

function colourSelector(names, colors) {
    var $colursList = $(".nameColourList");

    for (var i = 0; i < 12; i++) {
        var name = names[i];
        var color = colors[i]

        $colursList.append('<div class="nameColourItem"><input type = "radio" name = "nameColor" value = "' + name + '" /><label>' + name + '</label><div id="color_' + name + '" class="zodiacColourWatch"></div><input id="hiden_' + name + '" type="hidden" value="' + color + '"></div>');
        $('#color_' + name).css("background-color", color);
    }


    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });


    $("input[type=radio]").click(function () {
        var zodiacName = $(this).val();
        var color = $("#hiden_" + zodiacName).val();
        var rgb = hexToRGB(color);

        $("#red").slider("value", rgb.r);
        $("#green").slider("value", rgb.g);
        $("#blue").slider("value", rgb.b);
        $("#swatch").css("background-color", color);

        $("#zodiacName").val(zodiacName);

    });
}

function hexFromRGB(r, g, b) {
    var hex = [
        r.toString(16),
        g.toString(16),
        b.toString(16)
      ];
    $.each(hex, function (nr, val) {
        if (val.length === 1) {
            hex[nr] = "0" + val;
        }
    });
    return hex.join("").toUpperCase();
}

function RGBColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

function hexToRGB(hex) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return new RGBColor(r, g, b);
}

function refreshSwatch() {
    var red = $("#red").slider("value"),
        green = $("#green").slider("value"),
        blue = $("#blue").slider("value"),
        hex = hexFromRGB(red, green, blue);
    $("#swatch").css("background-color", "#" + hex);
}

function submitColor() {

}