$(function () {
    initZodiacs();
    zodiacDetailListOrdering();
});

function initZodiacs() {
    $.ajax({
        url: 'business/zodiac_orders.php?opType=1',
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (data) {
            var names = new Array();
            var colors = new Array();

            $(data).each(function (i) {
                if (i > 0) {
                    names[this.sorting - 1] = this.name;
                    colors[this.sorting - 1] = this.color;
                }
            });

            initWheelNav(names, colors);
        }
    })
}


function initWheelNav(names, colors) {
    var wheel = new wheelnav('wheelDiv');
    wheel.slicePathFunction = slicePath().WheelSlice;
    wheel.markerPathFunction = markerPath().PieLineMarker;
    wheel.clickModeRotate = false;
    wheel.markerEnable = true;

    //var colors = ['#b25d25', '#808080', '#ffb61e', '#d41863', '#eacd76', '#8d4bbb', '#4169E1', '#00e09e', '#00e500', '#f00056', '#8A2BE2', '#fabc35'];

    //var names = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

    wheel.colors = colors;
    wheel.createWheel(names);

    for (var i = 0; i < 12; i++) {
        var newColor = colors[i];
        var name = names[i];
        (function (arg, name) {
            wheel.navItems[i].navigateFunction = function () {
                $("header").css('border-bottom-color', '' + arg + '');
                $("footer").css('border-top-color', '' + arg + '');

                var thisDetailDiv = $("#detailDIV_" + name);
                if (thisDetailDiv.length > 0) {
                    thisDetailDiv.show();
                    $("#wheelDiv").after(thisDetailDiv);
                } else {
                    thisDetailDiv = $('<div class="detailDiv masonryItem" ><div class="closeButton"><span class="">Close</span></div><div class="innerDiv"><img src="img/detail_Rat.gif"><p></p></div></div>');
                    thisDetailDiv.show();
                    thisDetailDiv.attr("id", "detailDIV_" + name);
                    thisDetailDiv.find("img").attr("src", "img/detail_" + name + ".gif ");
                    thisDetailDiv.find("p").text("123");

                    thisDetailDiv.find("span").click(function () {
                        var grandParent = $(this).parent().parent(".masonryItem");
                        $(".contain").append(grandParent);
                        grandParent.hide();

                        zodiacDetailListOrdering();
                    });


                    $("#wheelDiv").after(thisDetailDiv);
                }

                zodiacDetailListOrdering();
            };
        })(newColor, name);
    };
}

function zodiacDetailListOrdering() {
    $(".masonryItem").each(function (index) {
        $(this).css('margin-top', 20);
        $(this).css('margin-left', 20);
        $(this).css('width', 460);

        if (index > 1) {
            var preve_1 = $(this).prev(".masonryItem").prev(".masonryItem");
            var preve = $(this).prev(".masonryItem");

            var preveBottomYPositon_1 = preve_1.offset().top + preve_1.height();
            var preveBottomYPositon = preve.offset().top + preve.height();
            //alert(preverBottomYPositon - preveBottomYPositon);

            if ((preveBottomYPositon_1 - preveBottomYPositon) < 0 && preve.offset().left > 300) {
                $(this).css('margin-top', (preveBottomYPositon_1 - preveBottomYPositon + 20));
                $(this).css('margin-left', 10);
            }

            if (preve.offset().left < 300) {
                $(this).css('width', 470);
            }

            if ((preve.offset().left > 300 && preve_1.offset().left > 300) || (preve.offset().left < 300 && preve_1.offset().left < 300)) {
                var preve_2 = $(this).prev(".masonryItem").prev(".masonryItem").prev(".masonryItem");
                if (preve_2.length > 0) {
                    var preveBottomYPositon_2 = preve_2.offset().top + preve_2.height();
                    $(this).css('margin-top', (preveBottomYPositon_2 - preveBottomYPositon + 20));
                }
            }
        }
    });
}