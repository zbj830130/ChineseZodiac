$(function () {
    var $list = $(".zodiacList");
    var names = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

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
    
    $( "#tabs" ).tabs();
    
});