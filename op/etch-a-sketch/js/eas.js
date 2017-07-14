var squareCount = 6;

$(document).ready(function () {
    resetContainer();
    var container = $('#container');
    container.on("mouseenter", '.square', function () {
        var color = 'silver';
        if ($('#multocolor').is(":checked")) {
            var rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] +
                rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] +
                rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];
        }
        $(this).css('background', color);
    });
    // container.find('.square').mouseenter(function () {
    //     $(this).css("background-color", "silver");
    // });
    $('#reset-button').on('click', inputResponse);
    $('#reset-prompt').on('click', promptResponse);
});

function promptResponse() {
    var out = prompt("Please Square Count (1-64)", "64");
    if ($.isNumeric(out)) {
        squareCount = out
        resetContainer();
        $('#reset-layout').val(squareCount);
    }
}

function inputResponse() {
    squareCount = $('#reset-layout').val();
    resetContainer();
}


function resetContainer() {
    if (squareCount > 64) {
        squareCount = 64;
        $('#reset-layout').val(64);
    } else if (squareCount < 1) {
        squareCount = 1;
        $('#reset-layout').val(1);
    }

    var width = 100 / squareCount;
    var container = $('#container');
    container.find('.square').remove();

    for (var i = 0; i < squareCount * squareCount; i++) {
        container.append('<span class="square"></span>');
    }

    var square = container.find('.square');
    square.css({"height": width + '%', width: width + '%'});
}