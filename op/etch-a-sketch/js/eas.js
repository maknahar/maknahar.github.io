var squareCount = 64;

$(document).ready(function () {
    resetContainer()
    var container = $('#container');
    container.on("mouseenter", '.square', function () {
        $(this).css("background-color", "silver");
    });
    // container.find('.square').mouseenter(function () {
    //     $(this).css("background-color", "silver");
    // });
    $('#reset-button').on('click', inputResponse);
    $('#reset-prompt').on('click', promptResponse);
})

function promptResponse() {
    squareCount = prompt("Please Square Count (1-64)", "64");
    resetContainer();
    $('#reset-layout').val(squareCount);
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