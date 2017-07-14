var squareCount = 64;

$(document).ready(function () {
    resetContainer()
})

function resetContainer() {
    var width = 100 / squareCount;
    var container = $('#container');
    container.find('.square').remove();

    for (var i = 0; i < squareCount * squareCount; i++) {
        container.append('<span class="square"></span>');
    }

    var square = container.find('.square');
    square.css({"height": width + '%', width: width + '%'});
}