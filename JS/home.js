$(function () {
    initTimeSelector();
    eventbindings();
});

function initTimeSelector() {
    for (var i = 1937; i <= 2030; i++) {
        $('#select_year').append($('<option>', {
            value: i,
            text: i
        }));
    }

    for (var i = 1; i <= 12; i++) {
        var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        var name = monthNames[i - 1];
        $('#select_month').append($('<option>', {
            value: i,
            text: name
        }));
    }

    for (var i = 1; i <= 31; i++) {
        $('#select_day').append($('<option>', {
            value: i,
            text: i
        }));
    }
};

function eventbindings() {
    $('#select_month').change(function () {
        $('#select_day').find('option').remove();
        var year = $("#select_year option:selected").text();
        var month = $("#select_month option:selected").val();
        var maxDay = getMaxDay(year, month - 1);

        for (var i = 1; i <= maxDay; i++) {
            $('#select_day').append($('<option>', {
                value: i,
                text: i
            }));
        }
    });

    $("#lunar_submit").click(function () {
        var year = $("#select_year option:selected").text();
        var month = $("#select_month option:selected").val();
        var day = $("#select_day option:selected").val();

        $("#result_label").show().text("The Zodiac is " + CalConv(year, month, day));
    });
}