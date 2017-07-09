function SumOfMultipleOf(num, div) {
    var sum = 0;
    if (num === 0 || div === 0) {
        return 0;
    }

    for (var i = 1; i < num; i++) {
        if (i % div == 0) {
            sum += i;
        }
    }

    return sum
}

function printSolution() {
    document.getElementById("answer").innerHTML = SumOfMultipleOf(1000, 3) + SumOfMultipleOf(1000, 5) - SumOfMultipleOf(1000, 15);
    return
}
